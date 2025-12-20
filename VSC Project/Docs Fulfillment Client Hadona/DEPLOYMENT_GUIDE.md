# Panduan Push ke GitHub & Auto Deploy di Vercel

## Langkah 1: Commit & Push ke GitHub

### 1.1. Stage semua perubahan
```bash
git add app/api/search/route.ts lib/search-data.ts next.config.js supabase/schema.sql
```

Jika ada file `vercel.json` yang dihapus, tambahkan juga:
```bash
git add vercel.json
```

### 1.2. Commit perubahan
```bash
git commit -m "Fix: Remove duplicate code and cleanup files

- Remove duplicate code in search-data.ts
- Remove duplicate GET function in search API route
- Clean up schema.sql comments
- Clean up whitespace in next.config.js"
```

### 1.3. Push ke GitHub
```bash
git push origin main
```

**Repository GitHub:** https://github.com/Briyanes/docs-fulfillment-client-hadona.git

---

## Langkah 2: Setup Auto Deploy di Vercel

### 2.1. Login ke Vercel
1. Buka https://vercel.com
2. Login dengan akun GitHub Anda (atau daftar jika belum punya)

### 2.2. Import Project dari GitHub
1. Klik **"Add New..."** → **"Project"**
2. Pilih **"Import Git Repository"**
3. Cari dan pilih repository: `Briyanes/docs-fulfillment-client-hadona`
4. Klik **"Import"**

### 2.3. Configure Project Settings
Vercel akan otomatis detect bahwa ini Next.js project. Pastikan:
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default untuk Next.js)
- **Install Command:** `npm install` (default)

### 2.4. Environment Variables (Opsional)
Karena project menggunakan static data, environment variables untuk Supabase **tidak wajib**. 
Tapi jika Anda ingin setup untuk future use:

1. Di halaman **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://zlqkqmxhjalaenkjpmeq.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (dapatkan dari Supabase Dashboard)

2. Klik **"Save"**

### 2.5. Deploy
1. Klik **"Deploy"**
2. Tunggu proses build selesai (biasanya 1-3 menit)
3. Vercel akan memberikan URL deployment (contoh: `docs-fulfillment-client-hadona.vercel.app`)

---

## Langkah 3: Auto Deploy Setup (Sudah Otomatis!)

Setelah project di-import dari GitHub, **Vercel otomatis mengaktifkan auto-deploy**:

✅ **Setiap push ke branch `main`** → Vercel akan otomatis deploy ulang
✅ **Pull Request** → Vercel akan membuat preview deployment
✅ **Automatic HTTPS** → SSL certificate otomatis
✅ **CDN Global** → Site langsung di-deliver via CDN worldwide

### Cara Kerja Auto Deploy:
1. Anda push code ke GitHub (`git push origin main`)
2. GitHub mengirim webhook ke Vercel
3. Vercel otomatis:
   - Clone repository terbaru
   - Install dependencies (`npm install`)
   - Build project (`npm run build`)
   - Deploy ke production

---

## Langkah 4: Custom Domain (Opsional)

Jika ingin menggunakan domain sendiri:

1. Di Vercel Dashboard → Project Settings → **Domains**
2. Tambahkan domain Anda (contoh: `docs.hadona.com`)
3. Ikuti instruksi untuk setup DNS records
4. Vercel akan otomatis setup SSL certificate

---

## Troubleshooting

### Build Gagal di Vercel
- Cek **Deployments** tab di Vercel untuk melihat error logs
- Pastikan semua dependencies ada di `package.json`
- Pastikan build command berjalan tanpa error lokal

### Environment Variables Tidak Terdeteksi
- Pastikan variable sudah di-set di **Environment Variables** section
- Redeploy setelah menambah environment variable baru

### Auto Deploy Tidak Berjalan
- Cek **Settings** → **Git** untuk memastikan repository terhubung
- Pastikan webhook GitHub masih aktif
- Coba trigger manual deploy dulu untuk test

---

## Checklist Deployment

- [ ] Code sudah di-commit dan push ke GitHub
- [ ] Project sudah di-import ke Vercel
- [ ] Build berhasil tanpa error
- [ ] Site bisa diakses via Vercel URL
- [ ] Auto-deploy terkonfirmasi bekerja (test dengan push kecil)
- [ ] (Opsional) Custom domain sudah di-setup
- [ ] (Opsional) Environment variables sudah di-set jika diperlukan

---

## Informasi Penting

- **Repository:** https://github.com/Briyanes/docs-fulfillment-client-hadona
- **Project Type:** Next.js 16
- **Build Command:** `npm run build`
- **Node Version:** 18.x (sudah di-set di package.json)

---

Selamat! Setelah setup ini, setiap kali Anda push ke GitHub, Vercel akan otomatis deploy site terbaru. 🚀

