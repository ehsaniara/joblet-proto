#!/bin/bash
# Multi-language proto generation script

PROTO_DIR="proto"
PROTO_FILE="joblet.proto"

# Go generation
generate_go() {
    echo "Generating Go code..."
    mkdir -p gen
    # Generate all proto files
    protoc -I=$PROTO_DIR \
        --go_out=gen --go_opt=paths=source_relative \
        --go-grpc_out=gen --go-grpc_opt=paths=source_relative \
        $PROTO_DIR/*.proto
}

# Python generation
generate_python() {
    echo "Generating Python code..."
    mkdir -p python
    python -m grpc_tools.protoc -I$PROTO_DIR \
        --python_out=python \
        --pyi_out=python \
        --grpc_python_out=python \
        $PROTO_DIR/$PROTO_FILE
}

# Java generation
generate_java() {
    echo "Generating Java code..."
    mkdir -p java/src/main/java
    protoc -I=$PROTO_DIR \
        --java_out=java/src/main/java \
        --grpc-java_out=java/src/main/java \
        $PROTO_DIR/$PROTO_FILE
}

# Node.js/TypeScript generation
generate_node() {
    echo "Generating Node.js code..."
    mkdir -p node
    grpc_tools_node_protoc \
        --js_out=import_style=commonjs,binary:node \
        --grpc_out=grpc_js:node \
        --ts_out=grpc_js:node \
        -I $PROTO_DIR \
        $PROTO_DIR/$PROTO_FILE
}

# Parse arguments
case "$1" in
    go)
        generate_go
        ;;
    python)
        generate_python
        ;;
    java)
        generate_java
        ;;
    node)
        generate_node
        ;;
    all)
        generate_go
        generate_python
        generate_java
        generate_node
        ;;
    *)
        echo "Usage: $0 {go|python|java|node|all}"
        echo ""
        echo "Examples:"
        echo "  $0 go      # Generate Go code only"
        echo "  $0 python  # Generate Python code only"
        echo "  $0 all     # Generate for all languages"
        exit 1
        ;;
esac

echo "Generation complete!"