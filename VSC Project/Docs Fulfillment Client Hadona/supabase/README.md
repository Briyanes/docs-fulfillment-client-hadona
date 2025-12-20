# Supabase Setup Guide

## Status

**Database tidak diperlukan untuk project ini saat ini.**

Project ini menggunakan **static search data** dari file `lib/search-data.ts`, jadi Anda tidak perlu setup database di Supabase untuk menjalankan project.

## Kapan Database Diperlukan?

Database hanya diperlukan jika Anda ingin:
- Menyimpan konten artikel di database (bukan di file)
- Menambahkan fitur user authentication
- Menyimpan analytics atau tracking data
- Menyimpan user preferences atau bookmarks

## Setup Database (Opsional)

Jika Anda ingin menggunakan database di masa depan:

### 1. Buka Supabase Dashboard
- Login ke https://supabase.com/dashboard
- Pilih project: `pdamwotvomagbnphilby.supabase.co`

### 2. Jalankan Schema SQL
- Pergi ke **SQL Editor**
- Copy isi file `schema.sql`
- Paste dan klik **Run**

### 3. Update Code
- Update `lib/search-data.ts` untuk query dari database
- Update `app/api/search/route.ts` untuk menggunakan Supabase queries

## Environment Variables

Untuk project ini, Anda hanya perlu:
- `NEXT_PUBLIC_SUPABASE_URL` - URL Supabase project
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon key untuk client access

**Catatan:** Meskipun database tidak digunakan, environment variables tetap diperlukan karena `lib/supabase.ts` di-import di beberapa tempat.

## Current Implementation

- ✅ Search menggunakan static data (tidak perlu database)
- ✅ Content disimpan sebagai file React components
- ✅ Tidak ada user authentication
- ✅ Tidak ada data yang perlu disimpan

## Future Enhancements

Jika ingin menambahkan database:
1. Jalankan schema dari `schema.sql`
2. Migrate content dari file ke database
3. Update search function untuk query database
4. Tambahkan authentication jika diperlukan

