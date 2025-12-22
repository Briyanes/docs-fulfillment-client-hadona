# Fix Vercel Settings - Step by Step

## Yang Perlu Diubah (Dari Gambar yang Terlihat)

### 1. Root Directory ✅ (Sudah Benar!)
- **Status:** Kosong/Empty ✓
- **Action:** Biarkan kosong (tidak perlu diubah)

### 2. Framework Preset ✅ (Sudah Benar!)
- **Status:** Next.js ✓
- **Action:** Tidak perlu diubah

### 3. Node.js Version ❌ (PERLU DIUBAH!)
- **Status Saat Ini:** 24.x
- **Harus Diubah Ke:** 18.x (sesuai package.json)

---

## Langkah-langkah Perbaikan

### Step 1: Ubah Node.js Version
1. Scroll ke bagian **"Node.js Version"** (di bawah Root Directory)
2. Klik dropdown yang menunjukkan **"24.x"**
3. Pilih **"18.x"** dari list
4. Klik **"Save"** (tombol di bagian Node.js Version)

### Step 2: Verifikasi Root Directory
1. Di bagian **"Root Directory"**, pastikan field **kosong** (empty)
2. Jika ada isinya, hapus semua (biarkan kosong)
3. Klik **"Save"** (tombol di bagian Root Directory)

### Step 3: Save All Settings
- Pastikan semua perubahan sudah di-save
- Klik semua tombol "Save" yang ada di setiap section

### Step 4: Redeploy
1. Kembali ke halaman **"Deployments"** (klik tab di atas)
2. Klik tombol **"Redeploy"** pada deployment yang error
3. Pastikan **"Use existing Build Cache"** TIDAK dicentang
4. Klik **"Redeploy"**

---

## Ringkasan Settings yang Benar

```
✅ Framework Preset: Next.js
✅ Root Directory: (kosong/empty)
✅ Build Command: npm run build (auto)
✅ Output Directory: Next.js default (auto)
✅ Install Command: npm install (auto)
✅ Node.js Version: 18.x ← UBAH INI!
```

---

## Setelah Redeploy

1. Tunggu build selesai (1-3 menit)
2. Cek Build Logs untuk memastikan tidak ada error
3. Status akan berubah menjadi "Ready" jika sukses




