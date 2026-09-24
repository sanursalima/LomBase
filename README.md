# LomBase - Temukan dan Ikuti Lomba Pilihanmu 🏆

**LomBase** adalah portal informasi berbasis web yang dirancang khusus untuk membantu mahasiswa dan pelajar menemukan, 
memilah, serta mempromosikan kompetisi atau lomba dengan mudah dan cepat.

## 📖 Overview Proyek

Seringkali informasi mengenai perlombaan tersebar secara acak di berbagai media sosial. 
Hal ini menyulitkan mahasiswa untuk melacak *deadline*, membandingkan biaya pendaftaran, dan melihat detail persyaratan secara efisien. 

**LomBase** hadir sebagai solusi dengan merangkum semua informasi tersebut ke dalam satu website yang bersih, terpusat, dan interaktif. 
Pengguna dapat langsung mencari dan menyaring lomba sesuai minat dan kemampuan mereka hanya dalam hitungan detik.

## ✨ Fitur Utama

- **Katalog & Filter Pencarian:** Sistem filter dinamis yang memungkinkan pengguna memilah lomba berdasarkan kategori, jenjang,
  biaya pendaftaran, hingga format pelaksanaan (Online/Offline/Hybrid).
- **Detail Lomba Terstruktur:** Halaman informasi khusus yang menyajikan data lomba melalui navigasi Tab
  (Informasi, Persyaratan, Mekanisme, dan Timeline) agar rapi dan mudah dibaca.
- **Form "Promosikan Lomba":** Formulir pendaftaran lomba mandiri bagi pihak penyelenggara. Dilengkapi dengan validasi data *real-time*
  dan *auto-format* nominal biaya pendaftaran.
- **Desain Responsif & Mobile-First:** Antarmuka yang dioptimalkan untuk berbagai ukuran layar (Mobile, Tablet, dan Desktop) dengan dukungan navigasi *Hamburger Menu*.

## 🛠️ Tech Stack

Purwarupa (*MVP*) ini dibangun secara murni di sisi *Front-End* tanpa menggunakan *framework* eksternal untuk menjaga performa tetap ringan:
- **HTML5:** Menggunakan struktur semantik dan *form built-in validation*.
- **CSS3:** Penggunaan *CSS Variables* untuk konsistensi tema, Flexbox/Grid untuk tata letak, dan struktur penamaan BEM (*Block Element Modifier*).
- **Vanilla JavaScript (ES6):** Manipulasi DOM dan *Event Listeners* untuk interaksi *User Interface* (buka-tutup filter, navigasi tab)
  serta validasi *error handling* pada formulir.
