````markdown
# 📰 Portal Berita - Tugas Evaluasi 2

Aplikasi web portal berita yang dibangun menggunakan **Next.js**, autentikasi **OAuth2 (GitHub)** melalui **NextAuth**, dan styling dengan **Tailwind CSS**.

---

## 🚀 Fitur Utama

- 🔐 Login menggunakan GitHub OAuth2 (NextAuth.js)
- 📰 Menampilkan berita dari **3 portal berita berbeda**:
  - [GNews.io](https://gnews.io/)
  - [Mediastack.com](https://mediastack.com/)
  - [NewsData.io](https://newsdata.io/)
- 🔍 Fitur pencarian berita
- 📝 Halaman daftar & detail berita
- 🌐 Link ke sumber berita asli
- 🎨 Tampilan modern responsif (Tailwind CSS)
- 🧠 Redirect otomatis jika sudah login
- 🔒 Proteksi akses halaman login & logout

---

## 🛠️ Cara Install & Menjalankan

1. **Clone repo ini**
```bash
git clone https://github.com/panduwnda/portal-berita.git
cd portal-berita
````

2. **Install dependency**

```bash
npm install
```

3. **Buat file `.env.local`**

```env
GNEWS_API_KEY=masukkan_token_gnews
MEDIASTACK_API_KEY=masukkan_token_mediastack
NEWSDATA_API_KEY=masukkan_token_newsdata
GITHUB_CLIENT_ID=masukkan_client_id_github
GITHUB_CLIENT_SECRET=masukkan_client_secret_github
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=random_string_acak
```

4. **Jalankan aplikasi**

```bash
npm run dev
```

---

## 💻 Tampilan Halaman

* 🔐 Halaman Login
* 🏠 Halaman Utama (Daftar Berita)
* 📄 Halaman Detail Berita
* 🔍 Fitur Pencarian
* 🚪 Tombol Logout + Nama User di Navbar

---

## 📚 Teknologi yang Digunakan

* [Next.js](https://nextjs.org/)
* [NextAuth.js](https://next-auth.js.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* Public APIs: GNews, Mediastack, NewsData.io

---

## 👨‍🎓 Pengembang

* **Nama**: Pandu Putra Mulwanda
* **NIM**: 121140176
* **Kelas**: Pemrograman Web Lanjut

---

## 📄 Lisensi

Repositori ini dibuat sebagai bagian dari tugas evaluasi akademik Universitas Lampung.

````

---

### 📌 Langkah Selanjutnya

1. Buka proyek kamu di VS Code  
2. Buat atau buka file `README.md`  
3. Tempel isi di atas  
4. Simpan dan jalankan:

```bash
git add README.md
git commit -m "Tambah README lengkap"
git push
````
