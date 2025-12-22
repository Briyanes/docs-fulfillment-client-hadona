# Panduan Redeploy di Vercel

## ⚠️ PENTING: Fix Settings Dulu Sebelum Redeploy!

Jika error "No Next.js version detected" masih muncul, redeploy saja **tidak akan menyelesaikan masalah**. Harus fix settings dulu!

---

## Langkah 1: Fix Settings di Vercel (WAJIB!)

### 1.1. Buka Project Settings
1. Di Vercel Dashboard, klik nama project Anda
2. Klik **Settings** (ikon gear) di menu atas
3. Pilih tab **General**

### 1.2. Periksa & Fix Root Directory
1. Scroll ke bagian **Root Directory**
2. Pastikan isinya: **`.`** (titik saja) atau **kosong**
3. Jika tidak, ubah menjadi `.` dan klik **Save**

### 1.3. Periksa Framework Preset (Jika Ada)
1. Di bagian **Build & Development Settings**
2. **Framework Preset** harus: **Next.js**
3. Jika tidak, ubah ke **Next.js** dan klik **Save**

### 1.4. Build Command (Verifikasi)
Pastikan:
- **Build Command:** `next build` atau `npm run build`
- **Output Directory:** `.next` (untuk Next.js)
- **Install Command:** `npm install`

---

## Langkah 2: Redeploy

### Opsi A: Redeploy dari Deployment Page (Saat Ini)
1. **Jangan klik "Redeploy" di modal sekarang** - tutup dulu (klik Cancel)
2. Setelah fix settings di atas, baru kembali ke halaman deployment
3. Klik tombol **"Redeploy"** (ikon refresh di kanan atas)
4. Pastikan:
   - **Environment:** Production
   - **Use existing Build Cache:** Bisa dicentang (opsional)
5. Klik **"Redeploy"**

### Opsi B: Redeploy dari Settings (Setelah Fix)
1. Setelah fix settings, scroll ke bawah di Settings page
2. Klik **"Redeploy"** button
3. Atau kembali ke **Deployments** tab dan klik **Redeploy**

### Opsi C: Push Baru ke GitHub (Auto Redeploy)
Setelah fix settings:
1. Buat perubahan kecil (misal: update README)
2. Commit dan push:
   ```bash
   git add .
   git commit -m "Trigger redeploy"
   git push origin main
   ```
3. Vercel akan otomatis redeploy

---

## Checklist Sebelum Redeploy

- [ ] ✅ Root Directory = `.` (atau kosong)
- [ ] ✅ Framework Preset = Next.js
- [ ] ✅ Build Command = `next build` atau `npm run build`
- [ ] ✅ Settings sudah di-Save
- [ ] ✅ Sudah kembali ke Deployments page

---

## Setelah Redeploy

1. Tunggu build selesai (1-3 menit)
2. Cek **Build Logs** untuk memastikan tidak ada error
3. Jika sukses, akan muncul status **Ready**
4. Klik domain untuk melihat hasil deployment

---

## Jika Masih Error Setelah Redeploy

1. **Cek Build Logs** untuk melihat error detail
2. **Cek di GitHub** apakah `package.json` benar-benar di root:
   - Buka: https://github.com/Briyanes/docs-fulfillment-client-hadona
   - Pastikan `package.json` terlihat di root (bukan di subfolder)

3. **Coba Clear Cache:**
   - Di modal Redeploy, jangan centang "Use existing Build Cache"
   - Atau di Settings → Advanced → Clear Build Cache

4. **Double-check Root Directory:**
   - Pastikan benar-benar `.` (bukan path lain)
   - Save lagi untuk memastikan

---

## Troubleshooting

### Error: "No Next.js version detected"
**Penyebab:** Root Directory salah atau package.json tidak ditemukan
**Solusi:** Pastikan Root Directory = `.` dan package.json ada di root GitHub

### Error: "Build failed"
**Penyebab:** Dependencies atau build script error
**Solusi:** Cek Build Logs untuk detail error

### Deployment selalu error
**Penyebab:** Settings belum tersimpan dengan benar
**Solusi:** Pastikan semua settings sudah di-Save, lalu redeploy dengan cache disabled




