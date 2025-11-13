# Identitas Mahasiswa - Web Statis dengan CI/CD

Proyek web statis sederhana untuk menampilkan NIM dan identitas mahasiswa dengan implementasi Continuous Integration (CI) menggunakan GitHub Actions.

## Deskripsi

Aplikasi web statis yang menampilkan informasi identitas mahasiswa dengan fitur:

- Tampilan kartu identitas yang responsif
- Validasi data mahasiswa
- Unit testing otomatis
- CI/CD pipeline dengan GitHub Actions

## Struktur Proyek

```
web-sederhana/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── index.html              # Halaman utama
├── style.css               # Stylesheet
├── script.js               # JavaScript logic
├── test.js                 # Unit tests
├── package.json            # NPM configuration
└── README.md               # Dokumentasi
```

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- Node.js (untuk testing)
- GitHub Actions

## Menjalankan Test

Jalankan unit test secara lokal:

```bash
npm test
```

Test akan memvalidasi:

- ✓ Validasi NIM
- ✓ Validasi Email
- ✓ Validasi data mahasiswa lengkap
- ✓ Struktur HTML
- ✓ Keberadaan file-file penting

## CI/CD Pipeline

Pipeline GitHub Actions akan otomatis berjalan ketika:

- Ada push ke branch `main`
- Ada pull request ke branch `main`

### Proses CI/CD:

1. **Checkout Repository** - Mengambil kode terbaru
2. **Setup Node.js** - Menyiapkan environment (versi 18.x dan 20.x)
3. **Install Dependencies** - Install package yang dibutuhkan
4. **Run Unit Tests** - Menjalankan semua unit test
5. **Validate Files** - Memvalidasi keberadaan file HTML, CSS, JS
6. **Check Syntax** - Memeriksa syntax JavaScript
7. **Build Summary** - Membuat laporan build
8. **Upload Artifacts** - Upload hasil test
9. **Deployment Check** - Verifikasi kesiapan deployment

### Status Badge

Tambahkan badge berikut di README untuk menampilkan status CI:

```markdown
![CI Status](https://github.com/USERNAME/REPO-NAME/workflows/CI%20-%20Build%20and%20Test/badge.svg)
```

## Cara Menggunakan

1. **Edit Data Mahasiswa:**

   Buka file `script.js` dan ubah data di objek `mahasiswaData`:

   ```javascript
   const mahasiswaData = {
     nim: "123456789",
     nama: "John Doe",
     prodi: "Teknik Informatika",
     fakultas: "Fakultas Teknik",
     angkatan: "2024",
     email: "johndoe@university.ac.id",
   };
   ```

2. **Customisasi Tampilan:**

   Edit `style.css` untuk mengubah warna, font, atau layout sesuai keinginan.

3. **Push ke GitHub:**

   ```bash
   git add .
   git commit -m "Update identitas mahasiswa"
   git push origin main
   ```

4. **Lihat Hasil CI:**

   Buka tab "Actions" di repository GitHub untuk melihat hasil build dan test.

## Laporan Test

Setelah pipeline berjalan, Anda dapat melihat:

- Status build (Success/Failed)
- Hasil semua unit test
- Log detail dari setiap step
- Artifacts yang dapat didownload

## Troubleshooting

### Test Gagal?

- Pastikan NIM minimal 8 digit dan hanya berisi angka
- Pastikan Email menggunakan format yang valid
- Pastikan nama minimal 3 karakter
- Pastikan semua file (HTML, CSS, JS) ada

### CI/CD Tidak Berjalan?

- Pastikan file `.github/workflows/ci.yml` ada
- Pastikan push dilakukan ke branch `main`
- Cek tab Actions untuk melihat error detail
