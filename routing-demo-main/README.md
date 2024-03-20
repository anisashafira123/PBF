# Praktikum 1
1. Persiapkan project dengan memanfaatkan template repository yang telah dipersiapkan di alamat https://github.com/dhanifudin/routing-demo dan gunakan tombol Use this template kemudian pilih Create a new repository.
2. Clone project ke lokal laptop anda dan lakukan instalasi dependencies dengan menjalankan perintah berikut.
![CDM](/praktikum2/routing-demo-main/images/clone.png)
Untuk npm install
![CDM](/praktikum2/routing-demo-main/images/npm%20install.png)
3. Silahkan buka project tersebut dengan menggunakan VSCode dan perhatikan file yang ada dalam folder app.
4. Routing di ReactJS dengan NextJS memanfaatkan organisasi penamaan folder dan file pada folder app. Silahkan tambahkan file page.tsx di dalam folder app, dan buatlah komponen dengan kode berikut.
![CDM](/praktikum2/routing-demo-main/images/Praktikum1app_page.png)
5. Jalankan project dengan menggunakan perintah npm run dev di terminal VSCode. Dan silahkan buka browser pada alamat url http://localhost:3000
![CDM](/praktikum2/routing-demo-main/images/Praktikum1app_page%20Hasil.png)
6. Perhatikan pada project di VSCode, akan terdapat sebuah file yang akan digenerate yaitu layout.tsx. File ini akan secara otomatis digenerate jika tidak ditemukan. Perhatikan susunan kode yang ada didalamnya. Anda akan menemukan susunan html yang di dalamnya terdapat props children. Props children akan di-replace oleh komponen sesuai dengan routing.
7. Untuk membuat halaman routing /about dengan NextJS, silahkan buat folder /about dalam /app dan buat file dengan nama page.tsx. Kemudian buat function komponen seperti pada kode berikut.
![CDM](/praktikum2/routing-demo-main/images/prak1hasilabout.png)
Hasil dari kode diatas dapat dilihat pada gambar dibawah ini
![CDM](/praktikum2/routing-demo-main/images/Praktikum1Hasil2.png)
# Todo 
Buatlah halaman /profile yang menampilkan isi biodata anda dengan menggunakan routing di NextJS.
![CDM](/praktikum2/routing-demo-main/images/Praktikum1about_profile.png)
Output dari kode diatas dapat dilihat dibawah ini
![CDM](/praktikum2/routing-demo-main/images/Praktikum1HasilProfile.png)

# Praktikum 2: Membuat routing bersarang (Nested Routing)
1. Dengan menggunakan konsep yang sama pada Praktikum 1, silahkan tambahkan susunan folder /blogs/first dan /blogs/second. Kemudian tambahkan masing-masing untuk setiap folder dengan file page.tsx.
![CDM](/praktikum2/routing-demo-main/images/prak2no1.png)
Pada file /blogs/page.tsx buatlah function component seperti kode berikut atau anda dapat mengkreasikan tampilan dengan selera anda!
![CDM](/praktikum2/routing-demo-main/images/prak2no2.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak2no2hasil.png)
3. Pada file /blogs/first/page.tsx buatlah function component seperti berikut
![CDM](/praktikum2/routing-demo-main/images/prak2no3.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak2no3hasil.png)
4. Pada file /blogs/second/page.tsx buatlah function component seperti berikut:
![CDM](/praktikum2/routing-demo-main/images/prak2todo.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak2todohasil.png)
# Pertanyaan
Apa kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing?
Jawab:
Struktur bersarang dapat mempengaruhi kinerja sistem, terutama jika jumlah rute atau tingkat kedalaman nested routing menjadi sangat besar. Hal ini dapat menyebabkan kinerja aplikasi menjadi lambat atau tidak efisien.
# Praktikum 3: Membuat routing dinamis (Dynamic Routing)
1. Buatlah file /products/page.tsx yang berisi function component untuk menampilkan list dari products seperti kode berikut.
![CDM](/praktikum2/routing-demo-main/images/prak3no1.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak3no1hasil.png)
3. Kemudian buatlah file page.tsx pada lokasi /app/products/[ productId ] dan tambahkan kode sebagai berikut.
![CDM](/praktikum2/routing-demo-main/images/prak3no2.png)
Cobalah akses halaman /products dan /products/1 pada browser anda. Ubah nilai productId dengan nilai lainnya.
![CDM](/praktikum2/routing-demo-main/images/prak3hasilproducts1.png)
Todo 1
Perbaiki implementasi Praktikum 2 menggunakan Dynamic Routes
![CDM](/praktikum2/routing-demo-main/images/prak3todo1.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak3todo1hasil.png)
Todo 2:
Dengan menggunakan konsep Nested Routes dan Dynamic Routes, buatlah halaman dengan routing /products/[productId ]/reviews/[reviewId ]
![CDM](/praktikum2/routing-demo-main/images/prak3todo2.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak3todo2hasil.png)
# Praktikum 4: Navigasi dengan Link Component
1. Pada file /app/page.tsx tambahkan import Link komponen seperti kode berikut.
![CDM](/praktikum2/routing-demo-main/images/prak4no1.png)
2. Tambahkan penggunaan Link komponen untuk mengakses halaman /profile dan /about
![CDM](/praktikum2/routing-demo-main/images/prak4no2.png)
Coba buka browser anda dan cobalah untuk bernavigasi menggunakan Link komponen.
![CDM](/praktikum2/routing-demo-main/images/prak4no2hasil.png)
Todo : Tambahkan link yang sebelumnya anda telah kerjakan!
![CDM](/praktikum2/routing-demo-main/images/prak4no3.png)
Hasil
![CDM](/praktikum2/routing-demo-main/images/prak4no3hasil.png)