Langkah1 :
    Membuat folder baru bernama praktikum2 dengan menjalankan terminal 
    
![CMD](/img/langkah1.png)

Langkah 2 :
    Membuat project baru
    ![CMD](/img/langkah2.1.png)
    Hasil
    ![CMD](/img/hasil%20langkah2.1.png)

    -Soal 1
    A. Typescript adalah bahasa pemrograman berbasis JavaScript yang menambahkan fitur strong-typing & konsep pemrograman OOP klasik ( class, interface). Di dalam dokumentasinya, TypeScript disebut sebagai super-set dari JavaScript, artinya semua kode JavaScript adalah kode TypeScript juga. Bahasa pemrograman ini menawarkan class, module, dan interface yang membuat developer bisa mengembangkan aplikasi kompleks dengan lebih mudah. Hal inilah yang membedakannya dengan javascript.
    B. ESLint adalah sebuah tools untuk melakukan static analyzes kode kita agar kita tau dengan cepat menemukan masalah atau potensi bug dari kode yang sudah kita buat.
    C. Tailwind CSS merupakan framework CSS yang berbasis utility untuk membuat UI atau tampilan dari aplikasi web.Berbasis utility artinya Tailwind cuma terdiri dari 100% utility class dan nggak ada class komponen seperti Navbar, Button, Card, Modal, dll. Komponen-komponen ini kita buat sendiri dengan class utility.
    D. App router adalah bagian dari sebuah aplikasi web atau perangkat lunak yang bertanggung jawab untuk mengarahkan permintaan dari pengguna ke bagian yang tepat dari aplikasi. Ini biasanya mencakup kebijakan routing yang menentukan bagaimana URL (Uniform Resource Locator) yang diminta oleh pengguna akan dipetakan ke fungsi atau handler yang sesuai dalam aplikasi.
    E. Import alias adalah teknik yang digunakan untuk memberikan nama alternatif atau singkat kepada modul yang diimpor ke dalam file JavaScript. Ini memungkinkan pengembang untuk mengimpor modul dengan nama yang lebih mudah ditulis atau diingat, atau untuk menghindari konflik nama antara modul yang diimpor dengan nama yang sudah ada dalam file yang sedang dikembangkan.

Langkah 3 :
    Masuk ke dalam VS Code dengan kode berikut
    ![CMD](/img/Langkah3.1.png)
    Hasil dari struktur file dan folder react yang telah dibuat
    ![CMD](/img/langkah3.2.png)

    Soal 2
    1. .git 
        Folder .git pada proyek React (atau pada proyek apa pun yang menggunakan Git sebagai sistem kontrol versi) adalah folder yang mengandung semua informasi yang diperlukan oleh Git untuk melacak perubahan, riwayat commit, dan konfigurasi proyek. Ini adalah folder tersembunyi yang secara otomatis dibuat saat kita mulai menginisialisasi repositori Git di dalam direktori proyek.
    2. node_modules
        Folder node_modules pada proyek React (atau pada proyek JavaScript lainnya yang menggunakan manajer paket seperti npm atau Yarn) adalah tempat di mana semua paket atau modul pihak ketiga yang digunakan dalam proyek disimpan.
    3. public
        Folder public pada proyek React adalah tempat untuk meletakkan file-file statis yang akan disajikan secara langsung oleh server web ketika proyek React dijalankan. Isinya akan disalin secara langsung ke direktori akar situs web saat proyek React dikompilasi untuk produksi.
    4. src
        Folder src pada proyek React adalah tempat utama untuk meletakkan semua file sumber kode aplikasi. Ini adalah tempat di mana tempat akan menulis kode JavaScript, CSS, dan file lainnya yang akan digunakan dalam aplikasi React.
    5. .eslintrc.json
        Digunakan untuk mengonfigurasi ESLint, alat linting JavaScript yang digunakan untuk menerapkan aturan gaya kode, mendeteksi potensi bug, dan menerapkan praktik terbaik dalam pengembangan JavaScript.
    6. .gitignore
        File ini berisi daftar file dan folder yang akan diabaikan oleh Git ketika Anda menjalankan perintah-perintah seperti git add atau git commit. Ini sangat berguna untuk mengabaikan file yang dihasilkan secara otomatis atau file-file sementara yang tidak perlu disertakan dalam repositori Git, seperti file konfigurasi lokal, file output, atau folder node_modules.
    7. next.config.mjs
        File ini adalah konfigurasi kustom untuk proyek Next.js. Anda dapat menggunakan file ini untuk mengkonfigurasi berbagai aspek aplikasi Next.js, seperti pengaturan server, pengaturan webpack, dan banyak lagi.
    8. next-env.d.ts
        Ini adalah file yang digunakan oleh TypeScript untuk mendeklarasikan tipe-tipe yang spesifik untuk Next.js. Ini berisi deklarasi-deklarasi yang dibutuhkan agar TypeScript dapat bekerja dengan benar dengan kode Next.js.
    9. package.json
        file yang mengelola dependensi dan skrip dalam proyek Node.js.
    10. package-lock.json
        berisi daftar dependensi lengkap, bersama dengan versi yang tepat, yang terinstal dalam proyek. file package.json dan file package-lock.json penting untuk memastikan konsistensi instalasi paket dan menjaga keamanan dan kestabilan proyek.
    11. postcss.config.js
        adalah konfigurasi untuk PostCSS, alat yang digunakan untuk memproses dan mengonversi kode CSS dengan menggunakan plugin-plugin.
    12. README.md
         adalah file Markdown yang berisi dokumentasi untuk proyek. untuk memberikan informasi tentang cara menginstal, menggunakan, dan berkontribusi pada proyek, serta informasi-informasi lain yang mungkin berguna bagi pengguna atau kontributor proyek.
    13. tailwind.config.ts
        adalah konfigurasi untuk Tailwind CSS, sebuah kerangka kerja CSS yang sangat fleksibel dan dapat disesuaikan. file ini untuk mengkonfigurasi berbagai aspek dari Tailwind CSS, seperti tema, varian, dan banyak lagi.
    14. tsconfig.json
        adalah konfigurasi untuk TypeScript, yang digunakan untuk mengatur cara TypeScript mengompilasi kode Anda. file ini untuk mengatur berbagai opsi kompilasi TypeScript, seperti pengaturan modul, target platform, dan banyak lagi.

Langkah 4 : Run
    Run projek dengan kode dibawah
    ![CMD](/img/langkah4.1.png)
    Hasil
    ![CMD](/img/hasil%20langkah4.1.png)
Soal 3
    ![CMD](/img/hasil%20soal%203.png)

    Alasan kenapa teks tersebut otomatis berubah tanpa perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman browser adalah penggunaan npm run dev digunakan dalam pengembangan perangkat lunak untuk menjalankan serve pengembangan lokal secara otomatis, ini dikarenakan menggunakan alat seperti reactJS secara otomatis.

Tugas

Remix

![CMD](/img/remix.png)

Hasil

![CMD](/img/hasil%20remix.png)

Gatsby

![CMD](/img/gatsby1.png)
![CMD](/img/gatsby2.png)

Hasil

![cmd](/img/hasil%20gatsby.png)

Perbedaan 
Dari Next.js, Remix, dan Gatsby, dapat dilihat bahwa Next.js lebih menonjol sebagai kerangka kerja yang paling matang dan mapan. Dengan basis pengguna yang lebih besar, dokumentasi yang luas, dan dukungan komunitas yang kuat, Next.js adalah pilihan yang dapat diandalkan. Ini juga mendukung situs statis dan dinamis, menjadikannya solusi yang cocok untuk berbagai kasus penggunaan.Di sisi lain, jika kesederhanaan, kecepatan, dan pengaturan minimal adalah prioritas Anda, Remix mungkin merupakan pilihan yang lebih sesuai. Meskipun masih dalam tahap pengembangan dan belum memiliki banyak contoh serta kasus penggunaan, aplikasi ini mendapatkan tanggapan positif dari para pengembang dan menunjukkan harapan di masa depan.Mengenai Gatsby, ia mengalami penurunan popularitas, namun tetap menjadi pilihan yang lebih cepat dan ringan karena kemampuan pembuatan situs statisnya.

