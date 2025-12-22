# Fix: Vercel Framework Preset "Other" → Next.js

## Masalah
Vercel tidak auto-detect Next.js, jadi Framework Preset menunjukkan "Other" instead of "Next.js".

## Solusi: Manual Setup

### Langkah 1: Ubah Framework Preset
1. Di bagian **Framework Preset**, klik dropdown yang menampilkan **"Other"**
2. Pilih **"Next.js"** dari list
   - Ini akan otomatis set Build Command dan Output Directory yang benar

### Langkah 2: Set Project Name
1. Di bagian **Project Name**, ubah dari `my-project` menjadi:
   ```
   docs-fulfillment-client-hadona
   ```
   atau nama lain yang Anda inginkan

### Langkah 3: Verifikasi Settings
Setelah pilih Next.js, pastikan:
- **Framework Preset:** Next.js ✓
- **Root Directory:** `./` ✓ (sudah benar)
- **Build Command:** `next build` (auto-set)
- **Output Directory:** `.next` (auto-set)
- **Install Command:** `npm install` (auto-set)

### Langkah 4: Deploy
1. Klik tombol **"Deploy"** di bagian bawah
2. Tunggu proses build selesai (biasanya 1-3 menit)

---

## Setelah Deploy Berhasil

Setelah deployment sukses:
- ✅ Auto-deploy akan aktif otomatis
- ✅ Setiap push ke branch `main` akan trigger deployment baru
- ✅ Anda akan dapat URL production (contoh: `docs-fulfillment-client-hadona.vercel.app`)

---

## Catatan Penting

**Kenapa Vercel tidak auto-detect Next.js?**
Kadang-kadang terjadi karena:
- Repository baru di-clone
- Vercel belum sempat scan file structure
- Atau ada delay dalam detection

Tapi tidak masalah, kita bisa set manual dan akan bekerja dengan baik!




