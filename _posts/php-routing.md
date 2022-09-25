---
title: PHP Routing
description: Routing PHP dinamis bersih
thumbnail: /images/php-routing.png
date: "2021-09-07"
tags:
  - tech
  - php
---

PHP seperti yang kita tau, dapat diakses per halaman saat kita memanggil filenya atau statis, contoh: localhost/example.php. Tapi bagaimana jika kita mau membuat routingnya secara bersih tanpa pemanggilan file per file.

Kita dapat menggunakan halaman dinamis sehingga hanya satu halam yang selalu dipanggil untuk mengubah routenya contoh: `localhost/example`, akan memanggil `localhost/index.php` tetapi dengan parameter _url_ yang berisi _example_ sehingga routenya menjadi `localhost/index.php?url=example`

kita dapat melakukan itu dengan menambah file htaccess. Seperti pada [Panduan Lengkap Penggunaan .htaccess Pemula](https://www.niagahoster.co.id/blog/panduan-lengkap-penggunaan-htaccess-pemula/), htaccess adalah file konfigurasi yang berjalan di website untuk mengatur beberapa konfigurasi Apache Web Server. File .htaccess dapat digunakan untuk mengubah konfigurasi seperti mengaktifkan dan menonaktifkan fungsionalitas yang berjalan, melakukan redirect, mengatur ulang URL, memproteksi direktori menggunakan password, proteksi hotlink, memblokir IP tertentu, mengganti zona waktu, melakukan redirect, dan masih banyak yang lainnya.

Sehingga dengan file htaccess kita dapat dengan mudah mengatur URL untuk mengarahkan pada file utama yaitu index.php dan mengatur arah routenya

Langsung saja kita praktekkan contoh penggunaanya dengan membuat project PHP baru

Pada directory root project atau pada directory public kita dapat membuat file `.htaccsess` yang berisikan

```
Options -Multiviews

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule ^(.*)$ index.php?url=$1 [QSA,L]
```

beberapa pengertian dari implementasi yang sering digunakan untuk routing pada htaccess

```
RewriteCond %{REQUEST_FILENAME} !-d
```

Jika kondisi berikut ini benar, maka tulis ulang URL: <br />
Jika nama file yang diminta bukan direktori,

```
RewriteCond %{REQUEST_FILENAME} !-f
```

Jika nama file yang diminta bukan file biasa yang ada,

```
RewriteCond %{REQUEST_FILENAME} !-l
```

Jika nama file yang diminta bukan tautan simbolis,

```
RewriteRule ^(.+)$ index.php?url=$1 [QSA,L]
```

Tulis ulang URL dengan cara berikut:<br />
\[QSA\]<br />
Ambil seluruh nama file permintaan dan berikan sebagai nilai parameter kueri "url" ke index.php. Tambahkan string kueri apa pun dari URL asli sebagai parameter kueri lebih lanjut, sehingga semisal ada query akan diteruskan, contoh: `localhost/example?page=1` maka akan diteruskan `localhost/index.php?url=example?page=1`<br />
\[L\]<br />
hentikan pemrosesan file .htaccess (L) ini, sehingga script dibawahnya tidak akan dieksekusi.

Untuk implementasi mudah kita dapat menggunakan `switch` pada index.php seperti

```php
// index.php

<?php
    $request = $_GET['url'];
    switch ($request) {
        case '/' :
            require "home.php";
            break;
        default:
            http_response_code(404);
            echo "404 ". $request;
            break;
    }
```

pada home.php

```php
// home.php

<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World!!!</h1>
  </body>
</html>
```

Jika anda hanya ingin membuang atau menghilangkan extensi .php anda dapat melakukan

```
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.php -f
RewriteRule ^(.*)$ $1.php
</IfModule>
```

Atau jika ingin lebih kompleks dapat membuat MVC (Model, View, Controller) untuk mengatur project anda, dapat anda tonton playlist Pak Sandhika Galih, [**Membuat aplikasi MVC dengan PHP**](https://www.youtube.com/playlist?list=PLFIM0718LjIVEh_d-h5wAjsdv2W4SAtkx)

referensi :

- [Simple and elegant URL routing with PHP](https://steampixel.de/simple-and-elegant-url-routing-with-php/)
- [Apa arti $ 1 [QSA, L] dalam file .htaccess saya?](https://qastack.id/programming/12551382/what-does-1-qsa-l-mean-in-my-htaccess-file)
- [Menghilangkan Ekstensi .PHP dan .HTML Dengan .htaccess](https://www.rumahweb.com/journal/menghilangkan-ekstensi-php-dan-html-dengan-htaccess/)
- [Membuat aplikasi MVC dengan PHP](https://www.youtube.com/playlist?list=PLFIM0718LjIVEh_d-h5wAjsdv2W4SAtkx)
