# Praktikum 1: Instalasi Redux dan bootstrap
 Install project next.js baru, karena kita tidak menggunakan default App Router. Kita buat project baru dengan nama pertemuan-06 pada repo PBF 
 ![CMD](/praktikum2/pertemuan-06/image/install%20bootstrap.png)
 Buka open folder untuk project pertemuan-06 di VS Code, maka isi direktori yang ada di dalamnya sedikit berbeda dengan project yang sudah pernah kita buat sebelumnya. Yaitu terdapat folder pages dan styles.
 ![CMD](/praktikum2/pertemuan-06/image/projectpertemuan-06.png)
 Kali ini kita coba pakai CSS Library Bootstrap dengan menjalankan perintah
 ![CMD](/praktikum2/pertemuan-06/image/perintah%20install%20bootstrap.png)
 Kemudian kita import bootstrap pada aplikasi next.js kita. Kita edit file pages/_app.tsx
 ![CMD](/praktikum2/pertemuan-06/image/prak1app.png)
 Sekarang kita perlu mencoba implementasi bootstrap pada project next.js kita. Contoh kita edit file pages/index.tsx menjadi seperti ini
 ![CMD](/praktikum2/pertemuan-06/image/prak1index1.png)
 ![CMD](/praktikum2/pertemuan-06/image/prak1index2.png)
 Coba kita jalankan project next.js kita, dan laporkan apa yang terjadi?
 Yang terjadi bisa terlihat pada gambar dibawah ini
 ![CMD](/praktikum2/pertemuan-06/image/prak1hasil1.png)
 ![CMD](/praktikum2/pertemuan-06/image/prak1hasil2.png)
 Penjelasan: Kode tersebut adalah project React yang menggunakan Bootstrap untuk membuat sebuah tombol. Saat tombol tersebut ditekan, sebuah jendela modal Bootstrap akan muncul dengan pesan "Halo semua, kita sedang menggunakan bootstrap di Next.js". Jendela modal ini dimunculkan menggunakan fitur bawaan Bootstrap yang memungkinkan tampilan modal ketika tombol tertentu ditekan.
 # Praktikum 2: Contoh Login dengan Redux
 1. Menginstall redux-toolkit dan redux-persistent
 2. Menginstall wrapper untuk redux di next.js
 3. Menginstall html parser yang ada di react untuk memparsing html string menjadi sebuah html page
 4. Setelah berhasil menginstal, dapat melihatnya file package.json
 ![CMD](/praktikum2/pertemuan-06/image/prak2packagejson.png)
 5. Buat folder dengan nama redux yang sejajar dengan folder public
 ![CMD](/praktikum2/pertemuan-06/image/prak2redux.png)
 6. Buat file redux/auth/authSlice.js
 ![CMD](/praktikum2/pertemuan-06/image/prak2authslice.png)
 7. Buat file redux/store/store.js
 ![CMD](/praktikum2/pertemuan-06/image/prak2storejs1.png)
 ![CMD](/praktikum2/pertemuan-06/image/prak2storejs2.png)
 8. Buat file .env.local untuk menyimpan Key pada persistConfig
 ![CMD](/praktikum2/pertemuan-06/image/prak2envlocal.png)
 9. Buat file baru di pages/login.tsx
 