#!/bin/bash

echo "⚙️ Compiling LaTeX tutorials to HTML..."

# Create the output directory if it doesn't exist
mkdir -p content/compiled_tutorials

# Loop through all .tex files in the raw folder
for tex_file in content/raw_tutorials/*.tex; do
    # Extract just the filename without the path and extension (e.g., "hello-world")
    filename=$(basename -- "$tex_file")
    slug="${filename%.*}"

    # Define the output HTML file path
    html_file="content/compiled_tutorials/${slug}.html"

    # Run Pandoc:
    # --katex: Converts math to KaTeX HTML spans
    # --wrap=none: Prevents weird line breaks in the HTML
    pandoc "$tex_file" -f latex -t html --katex --wrap=none -o "$html_file"

    echo "✅ Compiled: $slug"
done

echo "🎉 All tutorials compiled successfully!"
