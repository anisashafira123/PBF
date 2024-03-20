# Praktikum 1
Kita mencoba membuat tombol sederhana yang belum bisa melakukan apa-apa alias belum kita buat event handler untuk tombol tersebut. Sebagai contoh, berikut adalah sebuah tombol yang belum melakukan apa pun. Kita buat folder/file baru di src/component/button.tsx
![CMD](/praktikum2/04-event-state/img/prak1button.png)
Selanjutnya pada file src/app/page.tsx kita ubah menjadi seperti berikut
![CMD](/praktikum2/04-event-state/img/Prak1page.png)
Hasil
![CMD](/praktikum2/04-event-state/img/prak1hasil.png)

# Praktikum2
![CMD](/praktikum2/04-event-state/img/prak2button.png)
![CMD](/praktikum2/04-event-state/img/prak2page.png)

# Praktikum 3
![CMD](/praktikum2/04-event-state/img/prak3button.png)
![CMD](/praktikum2/04-event-state/img/prak3page.png)
![CMD](/praktikum2/04-event-state/img/prak3propagation.png)

# Praktikum 4
Langkah 1
Kita buat file data dummy untuk mencoba state pada src/data/article.js yang berisi seperti berikut
![CMD](/praktikum2/04-event-state/img/prak4article.png)
Kemudian kita coba buat komponen baru di src/component/gallery.tsx
![CMD](/praktikum2/04-event-state/img/prak4gallery.png)
#Soal
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?
ang akan terjadi ketika kita menekan tombol "Artikel Selanjutnya" maka gambar akan berubah-ubah sampai 5 kali, kemudian ketika kita menekan tombol "Artikel Selanjutnya" untuk keenam kalinya akan menampilkan hasil erorr. Seperti gambar di bawah ini
![CDM](/praktikum2/04-event-state/img/prak4soal1.png)
2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.
Sudah saya modifikasi, dan kode programnya menjadi seperti dibawah ini. Hasilnya akan kembali lagi ke artikel awal. Setelah gambar artikel itu selesai.

# Praktikum 5
![CMD](/praktikum2/04-event-state/img/prak5form1.png)
![CMD](/praktikum2/04-event-state/img/prak5form2.png)
![CMD](/praktikum2/04-event-state/img/prak5form3.png)
![CMD](/praktikum2/04-event-state/img/prak5form4.png)
![CMD](/praktikum2/04-event-state/img/prak5page.png)
![CMD](/praktikum2/04-event-state/img/prak5hasil.png)
Kemudian jika kita menjawab Form tersebut dengan jawaban Tikus, maka hasilnya
![CDM](/praktikum2/04-event-state/img/hasil%20jawaban%20benar%20tikus.PNG)
Tetapi jika kita menjawab jawaban lain, maka hasilnya seperti di bawah ini
![CDM](/praktikum2/04-event-state/img/hasil%20jawaban%20form%20tikus%20salah.PNG)
Berikut merupakan kode pada src/component/form.tsx
![CDM](/praktikum2/04-event-state/img/prak5langkah2.PNG)
Hasil
![CDM](/praktikum2/04-event-state/img/prak5hasil1.png)
#Soal
1. Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?

Perbedaan antara fungsi Form_2 yang pertama dengan yang kedua terletak pada cara perhitungan nilai fullName. Dalam fungsi pertama: Kita menggunakan sebuah state fullName untuk menyimpan dan mengupdate nilai lengkap nama, dan setiap kali nilai firstName atau lastName berubah, kita memperbarui nilai fullName menggunakan setState.Sedangkan dalam fungsi kedua: Kita tidak menggunakan state khusus untuk fullName, tetapi kita menghitung nilai fullName secara langsung dari firstName dan lastName dalam setiap render. Ini berarti setiap kali nilai firstName atau lastName berubah, fullName akan secara otomatis diupdate karena dihitung ulang di setiap render.

Jadi, perbedaan utamanya adalah dalam pendekatan pengelolaan state. Fungsi pertama menggunakan state khusus untuk fullName, sementara fungsi kedua menghitung fullName langsung tanpa menggunakan state tambahan. Dengan demikian, fungsi kedua dapat lebih ringkas dan tidak memerlukan penggunaan useState tambahan. Namun, kedua pendekatan tersebut akan berdampak pada performa dan pengelolaan memori dalam kasus yang lebih besar atau lebih kompleks.

2. Kenapa perlu menghapus state fullName? Apa keuntungannya? 
Sederhana dan ringkas: Tanpa menggunakan state tambahan, kode menjadi lebih sederhana dan mudah dipahami. Tidak perlu melakukan pengelolaan tambahan terhadap state fullName. Efisiensi: Dengan menghitung nilai fullName langsung di setiap render, kita menghindari overhead yang terkait dengan penggunaan state tambahan. Ini dapat meningkatkan efisiensi dalam kasus yang lebih besar atau saat memiliki banyak komponen yang di-render. Performa: Dengan tidak menggunakan state tambahan, kita mengurangi jumlah perubahan state yang harus dikelola oleh React. Ini dapat meningkatkan performa aplikasi, terutama dalam aplikasi yang lebih besar atau saat memiliki banyak komponen yang saling terkait.

# Praktikum 6
Beriku merupakan kode pada accordion
![CDM](/praktikum2/04-event-state/img/prak6accordion1.png)
![CMD](/praktikum2/04-event-state/img/prak6accordion2.png)
Dan untuk hasil output kode diatas dapat dilihat dalam gamber dibawah ini
![CMD](/praktikum2/04-event-state/img/prak6hasilsebelumchat1.png)
![CMD](/praktikum2/04-event-state/img/prak6hasilsebelumchat2.png)
Berikut merupakan kode yang terdapat pada file.tsx
![CMD](/praktikum2/04-event-state/img/prak6chat1.png)
![CMD](/praktikum2/04-event-state/img/prak6chat2.png)
![CMD](/praktikum2/04-event-state/img/prak6chat3.png)
Berikut merupakan hasil output yang dihasilkan dari kode diatas
![CMD](/praktikum2/04-event-state/img/prak6chat.png)
#Soal
1. Apa tujuan dari penulisan ini key={to.email} pada < Chat key={to.email} contact={to} / > ?
dilakukan untuk memberikan identifikasi unik pada setiap contoh dari komponen tag chat. Properti key digunakan oleh React untuk membantu dalam memperbarui komponen yang dirender secara efisien, terutama saat ada perubahan dalam daftar kontak yang ditampilkan.Dalam kasus ini, kita menggunakan email sebagai nilai kunci karena setiap kontak memiliki email yang unik. Dengan menggunakan kunci yang unik seperti email, React dapat mengidentifikasi dengan tepat komponen tag chat mana yang perlu diperbarui saat ada perubahan dalam kontak yang dipilih. Ini membantu mengoptimalkan kinerja aplikasi dengan memastikan bahwa hanya komponen yang benar-benar perlu diperbarui yang akan diperbarui oleh React, sehingga menghindari pembaruan yang tidak perlu pada tampilan.

2. Apa fungsi dari props key tersebut?
props key digunakan oleh React untuk memberikan identifikasi unik pada setiap elemen atau komponen yang dirender dalam sebuah daftar. Ini membantu React dalam mengelola dan memperbarui daftar dengan efisien, karena memungkinkan React untuk mengenali elemen atau komponen mana yang berubah, ditambahkan, atau dihapus. Dengan props key, React dapat memperbarui tampilan hanya untuk elemen atau komponen yang berubah, sehingga meningkatkan kinerja aplikasi.
