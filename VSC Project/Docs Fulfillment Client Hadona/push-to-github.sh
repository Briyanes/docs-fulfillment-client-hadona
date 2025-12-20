#!/bin/bash

# Script untuk push perubahan ke GitHub
# Jalankan dengan: bash push-to-github.sh

echo "🚀 Starting push to GitHub..."

# Pastikan di directory yang benar
cd "$(dirname "$0")"

# Cek status git
echo ""
echo "📋 Current git status:"
git status --short | head -10

# Stage semua perubahan yang sudah dimodifikasi
echo ""
echo "➕ Staging changes..."
git add app/api/search/route.ts
git add lib/search-data.ts
git add next.config.js
git add supabase/schema.sql

# Handle deleted vercel.json jika ada
if git status --short | grep -q "D.*vercel.json"; then
    echo "🗑️  Handling deleted vercel.json..."
    git add vercel.json
fi

# Commit perubahan
echo ""
echo "💾 Committing changes..."
git commit -m "Fix: Remove duplicate code and cleanup files

- Remove duplicate code in search-data.ts
- Remove duplicate GET function in search API route
- Clean up schema.sql comments
- Clean up whitespace in next.config.js"

# Push ke GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Done! Check your GitHub repository:"
echo "   https://github.com/Briyanes/docs-fulfillment-client-hadona"
echo ""
echo "📝 Next step: Setup Vercel auto-deploy (see DEPLOYMENT_GUIDE.md)"

