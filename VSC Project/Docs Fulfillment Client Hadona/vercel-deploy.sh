#!/bin/bash
echo "🚀 Starting Vercel Deployment Fix..."

# Clean build
rm -rf .next
rm -rf node_modules

# Install dependencies
npm install

# Build project
echo "📦 Building project..."
npm run build

# Check if build successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for Vercel deployment"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://vercel.com/dashboard"
    echo "2. Select project: docs-fulfillment-client-hadona"
    echo "3. Click 'Redeploy'"
else
    echo "❌ Build failed!"
    exit 1
fi