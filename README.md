# Joblet Protocol Buffer Definitions

[![CI](https://github.com/ehsaniara/joblet-proto/actions/workflows/ci-release.yml/badge.svg)](https://github.com/ehsaniara/joblet-proto/actions/workflows/ci-release.yml)
[![Latest Release](https://img.shields.io/github/v/release/ehsaniara/joblet-proto)](https://github.com/ehsaniara/joblet-proto/releases/latest)

This repository contains the Protocol Buffer definitions for the Joblet distributed job execution system. These definitions are used to generate client libraries for multiple programming languages.

## Quick Start

### Option 1: Use Pre-built Language Bindings (Recommended)

Download language-specific bindings from our [releases](https://github.com/ehsaniara/joblet-proto/releases/latest):

**Go**
```bash
curl -L https://github.com/ehsaniara/joblet-proto/releases/latest/download/joblet-proto-go.tar.gz | tar xz
# Use in your Go project
import pb "joblet/api/gen"
```

**Python**
```bash
curl -L https://github.com/ehsaniara/joblet-proto/releases/latest/download/joblet-proto-python.tar.gz | tar xz
# Use in your Python project
import joblet_pb2
import joblet_pb2_grpc
```

**Java**
```bash
curl -L https://github.com/ehsaniara/joblet-proto/releases/latest/download/joblet-proto-java.tar.gz | tar xz
```

**Node.js/TypeScript**
```bash
curl -L https://github.com/ehsaniara/joblet-proto/releases/latest/download/joblet-proto-node.tar.gz | tar xz
```

### Option 2: Generate From Source

If you prefer to generate the bindings yourself:

1. **Install prerequisites:**
   ```bash
   # Install protoc
   sudo apt-get install protobuf-compiler  # Ubuntu/Debian
   brew install protobuf                   # macOS

   # Install language-specific tools
   make install-tools  # For Go tools
   pip install grpcio-tools  # For Python
   npm install -g grpc-tools  # For Node.js
   ```

2. **Generate bindings:**
   ```bash
   # Generate for specific language
   ./generate.sh go
   ./generate.sh python
   ./generate.sh java
   ./generate.sh node

   # Or generate for all languages
   ./generate.sh all
   ```

## Services

The Joblet protocol defines the following gRPC services:

### Core Services (Port 50051 - joblet.proto)

- **JobService** - Job lifecycle management (create, monitor, cancel, live log streaming)
- **NetworkService** - Network configuration and management
- **VolumeService** - Storage volume operations
- **MonitoringService** - System metrics and health monitoring
- **RuntimeService** - Runtime environment management

### Persistence Services (Port 50052 - persist.proto)

- **PersistService** - Historical log and metrics queries from disk storage

## Architecture: Dual-Service Design

Joblet uses a **CQRS (Command Query Responsibility Segregation)** architecture with two separate services:

1. **joblet-core (Port 50051)** - Handles live operations:
   - Running jobs
   - Real-time log streaming
   - Live metrics
   - Job management (stop, cancel, delete)

2. **joblet-persist (Port 50052)** - Handles historical queries:
   - Historical log queries with filtering and pagination
   - Historical metrics queries with time ranges
   - Persistent storage queries

This separation allows for:
- Independent scaling of command vs query workloads
- Different optimization strategies for live vs historical data
- Reduced load on the core service by offloading historical queries

## Usage Examples

### Connecting to Both Services

**Go Example:**
```go
import (
    pb "github.com/ehsaniara/joblet-proto/gen"
    persistpb "github.com/ehsaniara/joblet-proto/gen/persist"
    "google.golang.org/grpc"
)

// Connect to joblet-core (Port 50051)
coreConn, _ := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(creds))
jobClient := pb.NewJobServiceClient(coreConn)

// Connect to joblet-persist (Port 50052)
persistConn, _ := grpc.Dial("localhost:50052", grpc.WithTransportCredentials(creds))
persistClient := persistpb.NewPersistServiceClient(persistConn)
```

**Python Example:**
```python
import grpc
import joblet_pb2
import joblet_pb2_grpc
import persist_pb2
import persist_pb2_grpc

# Connect to joblet-core (Port 50051)
core_channel = grpc.secure_channel('localhost:50051', credentials)
job_client = joblet_pb2_grpc.JobServiceStub(core_channel)

# Connect to joblet-persist (Port 50052)
persist_channel = grpc.secure_channel('localhost:50052', credentials)
persist_client = persist_pb2_grpc.PersistServiceStub(persist_channel)
```

### Hybrid Log Fetching Pattern

The recommended pattern is to fetch historical logs first, then stream live logs:

```python
# 1. Fetch historical logs from persist service
request = persist_pb2.QueryLogsRequest(
    job_id="f47ac10b-58cc-4372-a567-0e02b2c3d479",
    stream=persist_pb2.STREAM_TYPE_UNSPECIFIED  # Both stdout and stderr
)
for log_line in persist_client.QueryLogs(request):
    print(log_line.content.decode('utf-8'))

# 2. Stream live logs from core service
request = joblet_pb2.GetJobLogsReq(uuid=job_id)
for chunk in job_client.GetJobLogs(request):
    print(chunk.payload.decode('utf-8'))
```

### Querying Historical Metrics

```python
# Query metrics with time range and pagination
request = persist_pb2.QueryMetricsRequest(
    job_id="f47ac10b-58cc-4372-a567-0e02b2c3d479",
    start_time=1633024800000000000,  # Unix nanoseconds
    end_time=1633028400000000000,
    limit=100
)
for metric in persist_client.QueryMetrics(request):
    print(f"CPU: {metric.data.cpu_usage}, Memory: {metric.data.memory_usage}")
```

## Related Projects

- [Joblet](https://github.com/ehsaniara/joblet) - Server implementation
