# Praktikum 1 : Membuat Variasi Ukuran Teks Heading dengan Context
1. Buat project baru dan repo baru di GitHub
Silakan buat project baru seperti berikut dan repo baru dengan nama #07-belajar-context-nextjs
![CMD](/praktikum2/belajar-context/image/1langkah1_1.png)
2. Buat struktur folder dengan prinsip atomic design
Buatlah folder baru di src/components seperti berikut ini
![CMD](/praktikum2/belajar-context/image/1langkah2_1.png)
3. Buat komponen atom baru
Buat file baru di src/components/atoms/heading.tsx berisi kode sebagai berikut.
![CMD](/praktikum2/belajar-context/image/1langkah3_1.png)
Kemudian buat file baru di src\components\atoms\section.tsx berisi kode berikut.
![CMD](/praktikum2/belajar-context/image/1langkah3_2.png)
Lalu bagian MainPage buat file baru di src\components\templates\main_page.tsx berisi kode sebagai berikut.
![CMD](/praktikum2/belajar-context/image/1langkah3_3.png)
4. Ubah isi kode page.tsx dan run
Ubahlah kode di src\app\page.tsx seperti berikut. Lalu run dan lihat hasilnya di browser Anda.
![CMD](/praktikum2/belajar-context/image/1langkah4_1.png)
Untuk hasilnya dapat dilihat pada gambar dibawah ini
![CMD](/praktikum2/belajar-context/image/1langkah_hasil.png)
# Soal

5. Buat Context
    5.1 Buatlah file baru di src\utilities\context\mycontext.tsx yang berisi kode sebagai berikut:
    ![CMD](/praktikum2/belajar-context/image/1langkah5.1_1.png)
    5.2 Gunakan Context
    Ubahlah isi kode komponen Heading dengan Impor useContext Hook dari React dan context Anda:
    ![CMD](/praktikum2/belajar-context/image/1langkah5.2_1.png)
    Saat ini, komponen Heading membaca level dari props. Sebagai gantinya, hapus prop level dan baca nilai dari context yang baru saja Anda impor, LevelContext:
    ![CMD](/praktikum2/belajar-context/image/1langkah5.2_2.png)
    5.3 Sediakan Context
    Komponen Section saat ini merenders anaknya, bungkus mereka semua dengan sebuah context provider untuk menyediakan LevelContext kepada mereka seperti kode berikut:
    ![CMD](/praktikum2/belajar-context/image/1langkah5.3_1.png)
# Soal




