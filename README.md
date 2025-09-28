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

- **JobService** - Job lifecycle management (create, monitor, cancel)
- **NetworkService** - Network configuration and management
- **VolumeService** - Storage volume operations
- **MonitoringService** - System metrics and health monitoring
- **RuntimeService** - Runtime environment management

## Related Projects

- [Joblet](https://github.com/ehsaniara/joblet) - Server implementation
