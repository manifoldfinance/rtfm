#!/usr/bin/env bash

# Check if no arguments were provided
if [ "$#" -ne 1 ]; then
    echo "Error: No directory name provided."
    echo "Usage: $0 <directory_name>"
    exit 1
fi

DIR_NAME="$1"

# Check if directory already exists
if [ -d "$DIR_NAME" ]; then
    echo "Error: Directory '$DIR_NAME' already exists."
    exit 1
fi

# Create the directory
mkdir -p src/app/"$DIR_NAME"
echo "Directory '$DIR_NAME' created successfully."
# Create the 'page.mdx' file inside the directory
touch src/app/"$DIR_NAME/page.mdx"
echo "File 'page.mdx' created inside '$DIR_NAME'."
