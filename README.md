# Joblet Proto

Protobuf definitions for the Joblet job execution system.

## Overview

This repo contains the proto files that define how Joblet services talk to each other. It includes APIs for:

- Job management (run, stop, delete, get logs)
- Workflows with dependencies
- Network and volume management
- System monitoring and metrics
- Runtime environments

## Structure

```
joblet-proto/
├── proto/              # Protocol buffer definitions (the source of truth)
│   └── joblet.proto    # Main service definitions
├── generate.sh         # Multi-language code generation script
├── generate.go         # Go-specific generation
├── go.mod              # Go module definition
└── Makefile            # Build automation
```

Generated code isn't included - each project generates what it needs.

## Services

### JobService
Core job operations:
- `RunJob` - Start a job
- `GetJobStatus` - Check status
- `StopJob` - Stop running job
- `DeleteJob` - Delete a job
- `GetJobLogs` - Get output logs
- `ListJobs` - List all jobs
- `RunWorkflow` - Run a workflow
- `GetWorkflowStatus` - Check workflow status
- `ListWorkflows` - List workflows

### NetworkService
- `CreateNetwork` - Create network
- `ListNetworks` - List networks
- `RemoveNetwork` - Remove network

### VolumeService
- `CreateVolume` - Create volume
- `ListVolumes` - List volumes
- `RemoveVolume` - Remove volume

### MonitoringService
- `GetSystemStatus` - System status
- `StreamSystemMetrics` - Live metrics

### RuntimeService
- `ListRuntimes` - List runtimes
- `GetRuntimeInfo` - Runtime details
- `InstallRuntimeFromGithub` - Install from GitHub
- `InstallRuntimeFromLocal` - Install from local
- `ValidateRuntimeSpec` - Validate spec
- `RemoveRuntime` - Remove runtime

## Prerequisites

- Go 1.24.0+
- protoc 3.x
- Go protoc plugins (protoc-gen-go, protoc-gen-go-grpc)

## Installation

### Install protoc

```bash
# Ubuntu/Debian
apt-get install -y protobuf-compiler

# macOS
brew install protobuf

# Or download from releases
# https://github.com/protocolbuffers/protobuf/releases
```

### Install Go plugins

```bash
make install-tools

# Or manually:
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

## Building

```bash
# Generate Go code
make generate
# or
go generate ./...

# Clean generated files
make clean

# Check protoc
make check-protoc
```

## Usage for Different Languages

### Go

#### Import in your Go project

```go
import (
    pb "github.com/ehsaniara/joblet-proto/gen"
    "google.golang.org/grpc"
)

// Create a gRPC client
conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
if err != nil {
    log.Fatal(err)
}
defer conn.Close()

// Create service clients
jobClient := pb.NewJobServiceClient(conn)
networkClient := pb.NewNetworkServiceClient(conn)

// Use the clients
resp, err := jobClient.RunJob(context.Background(), &pb.RunJobRequest{
    Command: "echo",
    Args:    []string{"Hello, World!"},
})
```

### Python

#### Generate Python code

```bash
# Install dependencies
pip install grpcio-tools

# Clone the proto repository
git clone https://github.com/ehsaniara/joblet-proto
cd joblet-proto

# Generate Python code
./generate.sh python

# Or manually:
python -m grpc_tools.protoc -I proto \
    --python_out=. \
    --pyi_out=. \
    --grpc_python_out=. \
    proto/joblet.proto
```

#### Use in Python

```python
import grpc
import joblet_pb2
import joblet_pb2_grpc

channel = grpc.insecure_channel('localhost:50051')
stub = joblet_pb2_grpc.JobServiceStub(channel)

response = stub.RunJob(joblet_pb2.RunJobRequest(
    command="echo",
    args=["Hello, World!"]
))
```

### Java

#### Add to Maven/Gradle

```xml
<!-- Maven pom.xml -->
<dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-protobuf</artifactId>
    <version>1.58.0</version>
</dependency>
<dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-stub</artifactId>
    <version>1.58.0</version>
</dependency>

<build>
    <plugins>
        <plugin>
            <groupId>org.xolstice.maven.plugins</groupId>
            <artifactId>protobuf-maven-plugin</artifactId>
            <version>0.6.1</version>
            <configuration>
                <protoSourceRoot>${project.basedir}/proto</protoSourceRoot>
            </configuration>
        </plugin>
    </plugins>
</build>
```

#### Use in Java

```java
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import joblet.JobServiceGrpc;
import joblet.Joblet.RunJobRequest;
import joblet.Joblet.RunJobResponse;

ManagedChannel channel = ManagedChannelBuilder
    .forAddress("localhost", 50051)
    .usePlaintext()
    .build();

JobServiceGrpc.JobServiceBlockingStub stub =
    JobServiceGrpc.newBlockingStub(channel);

RunJobResponse response = stub.runJob(
    RunJobRequest.newBuilder()
        .setCommand("echo")
        .addArgs("Hello, World!")
        .build()
);
```

### Node.js/TypeScript

#### Generate and use

```bash
# Install dependencies
npm install -g grpc-tools
npm install @grpc/grpc-js @grpc/proto-loader

# Generate code
./generate.sh node
```

```javascript
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    'proto/joblet.proto',
    {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true}
);

const joblet = grpc.loadPackageDefinition(packageDefinition).joblet;

const client = new joblet.JobService(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

client.runJob({command: 'echo', args: ['Hello, World!']}, (err, response) => {
    console.log(response);
});
```

## Development

### Making changes

1. Edit `.proto` files
2. Run `make generate`
3. Run `make tidy`
4. Commit changes

### Adding services

1. Add to `proto/joblet.proto`
2. Add request/response messages
3. Run `make generate`
4. Update docs

## Contributing

When contributing:
- Keep proto changes backward compatible
- Update docs if needed
- Follow proto style guide

## Related Projects

- [Joblet](https://github.com/ehsaniara/joblet) - Server implementation
- [Joblet CLI](https://github.com/ehsaniara/joblet-cli) - CLI tool