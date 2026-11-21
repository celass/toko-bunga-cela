# Toko Bunga Pribadi

Website pribadi sederhana bertema **toko bunga**, dibuat dengan HTML, CSS, dan Vanilla JavaScript (tanpa framework).

## Fitur

- Hero dengan ilustrasi bunga SVG yang bergoyang pelan
- **Pilih bunga hari ini**: klik Mawar, Lavender, Matahari, atau Eukaliptus untuk mengganti warna tema
- Bagian Tentang, Keahlian, Karya (gaya papan menu toko), dan Kontak
- Formulir kontak yang membuka aplikasi email
- Responsif untuk ponsel, fokus keyboard terlihat, dan menghormati pengaturan *reduced motion*

## Struktur file

```
toko-bunga/
├── index.html   # struktur dan isi halaman
├── style.css    # tampilan dan warna tema
├── script.js    # pemilih bunga, menu mobile, formulir
└── README.md
```

## Cara menjalankan

1. Unduh semua file dalam satu folder.
2. Buka `index.html` di browser (klik dua kali).

Koneksi internet dibutuhkan agar font Google (Fraunces dan DM Sans) termuat. Tanpa internet, halaman memakai font bawaan sistem.

## Cara mengubah isi

| Yang diubah | Lokasi |
|---|---|
| Nama | Cari `Nama Kamu` di `index.html` (judul, logo, hero, footer) |
| Profesi dan cerita | Teks `[profesi / peran kamu]` dan bagian `#tentang` di `index.html` |
| Keahlian | Daftar `<li>` di bagian `#taman` |
| Karya | Daftar `<li>` di bagian `#buket` |
| Email penerima formulir | Konstanta `EMAIL_TUJUAN` di `script.js` |
| Warna | Variabel di `:root` pada `style.css`, atau atribut `data-bloom` dan `data-soft` pada tombol di `index.html` |

## Cara membagikan secara online

Unggah folder ini ke layanan hosting statis gratis seperti GitHub Pages, Netlify, atau Cloudflare Pages.

## Lisensi

Bebas dipakai dan diubah untuk keperluan pribadi.
