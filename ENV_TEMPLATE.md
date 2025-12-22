# Environment Variables Template

File ini berisi template untuk konfigurasi environment variables yang diperlukan.

## Cara Menggunakan

1. Copy isi file ini
2. Buat file `.env.local` di root project (folder yang sama dengan `package.json`)
3. Paste dan isi nilai yang sesuai

## Template

```env
# Supabase Configuration
# Copy this file and fill in your Supabase credentials

# Supabase Project URL
NEXT_PUBLIC_SUPABASE_URL=https://zlqkqmxhjalaenkjpmeq.supabase.co

# Supabase Anon/Public Key
# Get this from: Supabase Dashboard → Settings → API → anon/public key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Untuk Vercel Deployment

Tambahkan environment variables berikut di Vercel Dashboard:

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Value: `https://zlqkqmxhjalaenkjpmeq.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Value: (dapatkan dari Supabase Dashboard → Settings → API → anon/public key)

## Cara Mendapatkan Supabase Anon Key

1. Buka https://supabase.com/dashboard
2. Pilih project dengan URL: `zlqkqmxhjalaenkjpmeq.supabase.co`
3. Pergi ke **Settings** → **API**
4. Copy **anon/public key**
5. Paste ke file `.env.local` atau Vercel Environment Variables

