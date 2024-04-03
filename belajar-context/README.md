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
# Soal1

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
# Soal2
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
![CMD](/praktikum2/belajar-context/image/1hasil_2eror.png)
Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!
![CMD](/praktikum2/belajar-context/image/1hasil_2.png)

6. Menggunakan dan menyediakan context dari komponen yang sama
Berikut adalah bagaimana Anda dapat melakukannya dengan mengubah sedikit kode pada komponen Section:
![CMD](/praktikum2/belajar-context/image/1langkah6_1.png)
Dengan perubahan ini, Anda tidak perlu mengoper prop level baik ke < Section > atau ke < Heading >:
![CMD](/praktikum2/belajar-context/image/1langkah6_2.png)
![CMD](/praktikum2/belajar-context/image/1langkah6_3.png)
# Soal3
Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
![CMD](/praktikum2/belajar-context/image/1hasil_3.png)

# Praktikum 2: Membuat Context melewati komponen perantara
1. Buat Komponen Atom Baru
Buatlah file baru di src\components\atoms\section2.tsx berisi kode sebagai berikut.
![CMD](/praktikum2/belajar-context/image/2langkah1_1.png)
Lalu buatlah file baru di src\components\atoms\post.tsx dengan kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah1_2.png)
Selanjutnya kita buat molecules di src\components\molecules\recentpost.tsx dengan kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah1_3.png)
Kemudian buat organisms di src\components\organisms\allpost.tsx dengan kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah1_4.png)
Terakhir kita buat templates di src\components\templates\profile_page.tsx dengan kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah1_5.png)

2. Tambah ProfilePage ke page.tsx lalu run
Tambahkan komponen ProfilePage seperti kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah2_1.png)
Hapus bagian theme pada file tailwind.config.ts seperti kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah2_2.png)
Hapus semua style CSS di file src\app\globals.css lalu ganti dengan kode berikut.
![CMD](/praktikum2/belajar-context/image/2langkah2_3.png)
Ketika Anda run dengan npm run dev maka di browser akan tampil seperti berikut.
![CMD](/praktikum2/belajar-context/image/2langkah1_Hasil.png)
![CMD](/praktikum2/belajar-context/image/2langkah1_Hasil2.png)
# Soal 4
Tambahkan teks Nama dan NIM pada bagian komponen Post agar menunjukkan itu hasil kerja Anda!
![CMD](/praktikum2/belajar-context/image/Soal4Hasil.png)
