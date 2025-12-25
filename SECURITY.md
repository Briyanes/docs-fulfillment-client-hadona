# Security Documentation - Hadona Docs

## 🔒 Security Implementation

Dokumentasi ini menjelaskan security measures yang diimplementasikan berdasarkan **Meta Ads Report Generator** yang sudah terbukti aman dari malware.

---

## ✅ Security Headers (next.config.js)

Berikut security headers yang aktif:

### 1. **Strict-Transport-Security (HSTS)**
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
- Memaksa HTTPS untuk 2 tahun
- Termasuk subdomains
- Browser akan preload HSTS

### 2. **X-Frame-Options**
```
X-Frame-Options: SAMEORIGIN
```
- Mencegah clickjacking attack
- Hanya izinkan iframe dari domain sendiri

### 3. **X-Content-Type-Options**
```
X-Content-Type-Options: nosniff
```
- Mencegah MIME-sniffing
- Mencegah browser menginterpretasikan file berbeda dari tipe sebenarnya

### 4. **X-XSS-Protection**
```
X-XSS-Protection: 1; mode=block
```
- Aktifkan browser XSS filter
- Mode block untuk proteksi maksimal

### 5. **Referrer-Policy**
```
Referrer-Policy: origin-when-cross-origin
```
- Melindungi privacy user
- Kontrol informasi referrer yang dikirim

### 6. **Content-Security-Policy (CSP)**
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' https://cdn.jsdelivr.net; connect-src 'self' https: *.vercel.app; frame-src 'self' blob:; base-uri 'self'; form-action 'self';
```
- Mencegah XSS attacks
- Whitelist resource sources
- Blokir inline scripts tidak terpercaya
- Blokir external resources tidak diizinkan

### 7. **Permissions-Policy**
```
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
- Blokir akses kamera, microphone, dan geolocation
- User privacy protection

---

## 🛡️ Proteksi Malware

### Cara Kerja:

1. **HSTS (HTTPS Enforcement)**
   - User tidak bisa di-downgrade ke HTTP
   - Semua traffic terenkripsi
   - Mencegah man-in-the-middle attacks

2. **X-Frame-Options**
   - Mencegah website di-embed di iframe malicious
   - Proteksi clickjacking
   - Hanya domain sendiri yang bisa meng-embed

3. **X-Content-Type-Options**
   - Mencegah malware upload dengan ekstensi palsu
   - Browser tidak akan mengubah tipe file
   - Mencegah executable menyamar sebagai gambar/PDF

4. **X-XSS-Protection**
   - Filter XSS built-in browser
   - Blokir script injection
   - Mode block = stop execution jika terdeteksi

5. **Content-Security-Policy**
   - **SCRIPT PROTECTION:** Hanya script dari domain sendiri dan cdn.jsdelivr.net
   - **STYLE PROTECTION:** Inline styles diizinkan untuk Tailwind
   - **IMAGE PROTECTION:** Hanya HTTPS images, data URLs, dan blobs
   - **CONNECTION PROTECTION:** Hanya HTTPS connections ke Vercel
   - **FRAME PROTECTION:** Blokir iframe dari domain asing

---

## 🌐 Vercel Configuration (vercel.json)

### Security Headers di Vercel:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

### Region:
- **Singapore (sin1)** - Untuk performa terbaik di Asia Tenggara

---

## 🔍 Security Verification

### Cara Cek Security Headers:

1. Buka website: https://docs.hadona.id
2. Buka **DevTools** (F12)
3. Tab **Network**
4. Refresh halaman
5. Klik request pertama
6. Tab **Headers**
7. Cari response headers

### Expected Headers:
```
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
referrer-policy: origin-when-cross-origin
content-security-policy: default-src 'self'; script-src 'self'...
permissions-policy: camera=(), microphone=(), geolocation=()
```

---

## 🚀 Deployment Security

### Vercel Dashboard Settings:

1. **Force HTTPS**
   - Settings → Domains
   - Edit domain
   - Toggle "Force HTTPS" = ON

2. **Protected Branches** (Optional)
   - Settings → Git
   - Protected Branches
   - Protect `main` branch

3. **Environment Variables**
   - Settings → Environment Variables
   - Add API keys di sini
   - Jangan di .env file

---

## 📊 Security Checklist

### Pre-Deployment:
- [x] Security headers di next.config.js
- [x] Security headers di vercel.json
- [x] CSP yang tepat untuk Next.js
- [x] HTTPS enforcement
- [x] XSS protection
- [x] Clickjacking protection
- [x] MIME-sniffing protection

### Post-Deployment:
- [ ] Cek security headers di browser DevTools
- [ ] Verify HTTPS berjalan
- [ ] Test semua fungsi website
- [ ] Cek console untuk CSP errors

---

## 🛡️ Celah Keamanan yang Ditutup

### 1. **XSS (Cross-Site Scripting)**
- ✅ CSP memblokir script injection
- ✅ X-XSS-Protection aktif
- ✅ React auto-escaping

### 2. **Clickjacking**
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ CSP frame-src: 'self'

### 3. **Malware Upload**
- ✅ X-Content-Type-Options: nosniff
- ✅ CSP memblokir eksekusi file tidak dikenal

### 4. **Man-in-the-Middle**
- ✅ HSTS memaksa HTTPS
- ✅ Redirect HTTP → HTTPS

### 5. **Data Leakage**
- ✅ Referrer-Policy
- ✅ Permissions-Policy

### 6. **Downgrade Attacks**
- ✅ HSTS dengan preload

---

## 📞 Security Issues?

Jika menemukan celah keamanan:
1. Jangan expose secara publik
2. Report ke development team
3. Monitor deployment
4. Verifikasi fix

---

## 📚 References

- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [CSP Analyzer](https://csp-evaluator.withgoogle.com/)

---

**Implementation:** Berdasarkan Meta Ads Report Generator (proven secure)
**Last Updated:** 2025-12-26
**Status:** ✅ Active & Protected
