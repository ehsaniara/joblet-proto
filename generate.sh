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

    # Use local plugin if available, otherwise check PATH
    GRPC_JAVA_PLUGIN="./protoc-gen-grpc-java"
    if [ ! -x "$GRPC_JAVA_PLUGIN" ]; then
        GRPC_JAVA_PLUGIN=$(which protoc-gen-grpc-java 2>/dev/null)
    fi

    if [ -z "$GRPC_JAVA_PLUGIN" ]; then
        echo "Error: protoc-gen-grpc-java not found. Download it from:"
        echo "  https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/"
        return 1
    fi

    protoc -I=$PROTO_DIR \
        --java_out=java/src/main/java \
        --grpc-java_out=java/src/main/java \
        --plugin=protoc-gen-grpc-java="$GRPC_JAVA_PLUGIN" \
        $PROTO_DIR/$PROTO_FILE
}

# Node.js/TypeScript generation
generate_node() {
    echo "Generating Node.js code..."
    mkdir -p node

    # Use local npm binaries if available
    GRPC_TOOLS="./node_modules/.bin/grpc_tools_node_protoc"
    TS_PLUGIN="./node_modules/.bin/protoc-gen-ts"

    if [ ! -x "$GRPC_TOOLS" ]; then
        GRPC_TOOLS=$(which grpc_tools_node_protoc 2>/dev/null)
    fi

    if [ -z "$GRPC_TOOLS" ]; then
        echo "Error: grpc_tools_node_protoc not found. Install with:"
        echo "  npm install grpc-tools grpc_tools_node_protoc_ts"
        return 1
    fi

    # Generate JavaScript and gRPC stubs
    $GRPC_TOOLS \
        --js_out=import_style=commonjs,binary:node \
        --grpc_out=grpc_js:node \
        -I $PROTO_DIR \
        $PROTO_DIR/$PROTO_FILE

    # Generate TypeScript definitions if plugin available
    if [ -x "$TS_PLUGIN" ]; then
        $GRPC_TOOLS \
            --plugin=protoc-gen-ts="$TS_PLUGIN" \
            --ts_out=grpc_js:node \
            -I $PROTO_DIR \
            $PROTO_DIR/$PROTO_FILE
    fi
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
        generate_node
        ;;
    *)
        echo "Usage: $0 {go|python|node|java|all}"
        echo ""
        echo "Examples:"
        echo "  $0 go      # Generate Go code only"
        echo "  $0 python  # Generate Python code only"
        echo "  $0 node    # Generate Node.js/TypeScript code"
        echo "  $0 all     # Generate Go, Python, and Node.js"
        echo "  $0 java    # Generate Java code (optional)"
        exit 1
        ;;
esac

echo "Generation complete!"