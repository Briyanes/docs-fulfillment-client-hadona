# Setup Repository Baru

Panduan untuk membuat repository baru tanpa commit history yang mengandung secret.

## Langkah-langkah

### 1. Buat Repository Baru di GitHub

1. Buka https://github.com/new
2. Repository name: `docs-fulfillment-hadona-digital-media` (atau nama lain jika sudah ada)
3. Description: "Documentation site for Hadona Digital Media"
4. Set to **Public** atau **Private** (sesuai kebutuhan)
5. **JANGAN** centang "Initialize with README"
6. Klik **Create repository**

### 2. Setup Fresh Git Repository

Setelah repository baru dibuat, jalankan perintah berikut di terminal:

```bash
cd "/Users/mac/VSC Project/Docs Fulfillment Client Hadona"

# Backup remote URL lama (jika perlu)
# git remote -v

# Hapus remote lama
git remote remove origin

# Tambahkan remote baru (ganti dengan URL repository baru Anda)
git remote add origin https://github.com/Briyanes/docs-fulfillment-hadona-digital-media.git

# Atau jika menggunakan SSH:
# git remote add origin git@github.com:Briyanes/docs-fulfillment-hadona-digital-media.git

# Buat branch baru tanpa history yang bermasalah
git checkout --orphan fresh-start

# Hapus semua file dari staging (tapi tetap di working directory)
git rm -rf --cached .

# Add semua file current
git add .

# Commit pertama di repository baru
git commit -m "Initial commit: Hadona Documentation Site

- Complete documentation for Client Agency (41 pages)
- Complete documentation for Client Whitelist (43 pages)
- Supabase integration setup
- Vercel deployment ready"

# Push ke repository baru
git push -u origin fresh-start

# Set fresh-start sebagai main branch (via GitHub UI atau):
git branch -M main
git push -u origin main
```

### 3. Set Main Branch di GitHub

1. Buka repository di GitHub
2. Go to **Settings** → **Branches**
3. Set default branch ke `main` (atau `fresh-start` jika belum di-rename)
4. Delete branch `main` yang lama jika ada

### 4. Update Vercel

1. Buka Vercel Dashboard
2. Go to project settings
3. Update Git Repository connection ke repository baru
4. Redeploy

## Catatan

- Repository baru akan memiliki clean history tanpa secret
- Semua file current akan tetap ada
- History lama tidak akan ter-copy
- Vercel perlu di-update untuk connect ke repository baru

