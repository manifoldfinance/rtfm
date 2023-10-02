find ./ -depth -name "*.md" -exec sh -c 'mv "$1" "${1%.md}.mdx"' _ {} \;
