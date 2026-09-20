#!/bin/bash

echo "🚀 Setting up the LaTeX Blog Architecture..."

# 1. Create the content directories for your raw LaTeX files
mkdir -p content/raw_tutorials

# 2. Create the Next.js app directories for the tutorials hub and dynamic routes
mkdir -p app/tutorials/\[slug\]

# 3. Create the metadata JSON file with a dummy entry
cat <<EOF > content/posts_metadata.json
[
  {
    "id": "1",
    "slug": "hello-world",
    "title": "Solving the Schrödinger Equation",
    "date": "$(date +%Y-%m-%d)",
    "description": "A test run of our automated LaTeX-to-Next.js conversion pipeline.",
    "tags": ["Quantum Mechanics", "Test"]
  }
]
EOF

# 4. Create a dummy LaTeX file for our upcoming Pandoc test
cat <<EOF > content/raw_tutorials/hello-world.tex
\section{Introduction}
Welcome to your first LaTeX tutorial on the new web pipeline. 

Here is a test of our math rendering:
\begin{equation}
\hat{H} \Psi = E \Psi
\end{equation}

And a bit of inline math: $E=mc^2$.
EOF

# 5. Create placeholder Next.js pages so your local server doesn't throw errors
echo 'export default function TutorialsHub() { return <div className="text-white p-10 mt-20 text-center text-2xl">Tutorials Hub Coming Soon</div>; }' > app/tutorials/page.tsx
echo 'export default function BlogPost() { return <div className="text-white p-10 mt-20 text-center text-2xl">Single Post Coming Soon</div>; }' > app/tutorials/\[slug\]/page.tsx

echo "✅ Folders, placeholder pages, and dummy LaTeX files created successfully!"
