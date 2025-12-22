# Cara Akses Settings di Vercel

## Lokasi Settings (Ikon Gear ⚙️)

### Opsi 1: Dari Project Overview/Dashboard
1. **Klik nama project** "docs-fulfillment-client-hadona" di bagian atas halaman (atau di sidebar kiri)
   - Ini akan membawa Anda ke **Project Overview**
2. Di bagian atas halaman, ada menu tab:
   - **Overview** | **Deployments** | **Analytics** | **Settings** ← **Klik yang ini!**
3. Klik tab **"Settings"** - Ini akan membuka Settings page

### Opsi 2: Dari URL Langsung
1. Anda bisa langsung akses Settings via URL:
   ```
   https://vercel.com/[team-name]/docs-fulfillment-client-hadona/settings
   ```
2. Atau klik link Settings di breadcrumb/navigation

### Opsi 3: Dari Menu Dropdown (Jika Ada)
1. Di kanan atas halaman, cari icon **"..."** (three dots) atau **"⚙️"** (gear icon)
2. Klik dan pilih **"Project Settings"** atau **"Settings"**

---

## Setelah Masuk Settings

### Langkah-langkah:
1. Di halaman Settings, Anda akan lihat beberapa tab di sidebar kiri atau di atas:
   - **General** ← **Mulai dari sini!**
   - Environment Variables
   - Git
   - Domains
   - dll

2. Klik tab **"General"**

3. Scroll ke bawah, cari bagian:
   - **Root Directory** ← Ini yang perlu diubah!

---

## Visual Guide (Jika Bingung)

**Struktur Halaman Vercel biasanya seperti ini:**

```
┌─────────────────────────────────────────┐
│  docs-fulfillment-client-hadona         │ ← Nama Project (klik untuk overview)
│  ┌─────┬──────────┬──────────┬────────┐│
│  │Overview│Deployments│Analytics│Settings││ ← Tab Menu (klik "Settings")
│  └─────┴──────────┴──────────┴────────┘│
│                                         │
│  [Settings Page Content]                │
│  ├─ General ← KLIK INI                  │
│  ├─ Environment Variables               │
│  ├─ Git                                 │
│  └─ ...                                 │
│                                         │
│  [Di bagian General, scroll ke bawah]   │
│  Root Directory: [./]                   │ ← Pastikan ini = "."
│                                         │
└─────────────────────────────────────────┘
```

---

## Quick Path (Paling Cepat)

1. Di halaman deployment yang Anda lihat sekarang
2. **Klik nama project** di bagian atas: `docs-fulfillment-client-hadona`
   - Atau klik "← Back" atau icon arrow kiri
3. Di halaman Project Overview, **klik tab "Settings"** di menu atas
4. Klik **"General"** di sidebar atau scroll ke bagian General
5. Cari **"Root Directory"** dan pastikan = **`.`**

---

## Tips

- Jika tidak melihat tab Settings, pastikan Anda di halaman **Project Overview** (bukan Deployment Details)
- Settings biasanya ada di bagian **atas halaman** atau di **sidebar kiri**
- Icon gear (⚙️) biasanya ada di:
  - Tab menu sebagai "Settings"
  - Atau di dropdown menu (ikon "..." atau "⋮")

---

## Jika Masih Bingung

1. Coba akses langsung via URL: `https://vercel.com/[username]/docs-fulfillment-client-hadona/settings/general`
2. Atau dari dashboard utama Vercel, klik project Anda, lalu cari menu Settings




