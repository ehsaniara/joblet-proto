.PHONY: generate clean install-tools

# Generate Go code from proto files
generate:
	@echo "Generating Go code from proto files..."
	@go generate ./...
	@echo "Generation complete!"

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	@rm -rf gen/*
	@echo "Clean complete!"

# Install required tools
install-tools:
	@echo "Installing protoc-gen-go and protoc-gen-go-grpc..."
	@go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	@go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
	@echo "Tools installed!"

# Run go mod tidy
tidy:
	@echo "Running go mod tidy..."
	@go mod tidy
	@echo "Tidy complete!"

# Generate and tidy
all: generate tidy
	@echo "All tasks complete!"

# Check if protoc is installed
check-protoc:
	@which protoc > /dev/null || (echo "protoc not found. Please install protobuf compiler." && exit 1)
	@echo "protoc is installed: $(shell protoc --version)"