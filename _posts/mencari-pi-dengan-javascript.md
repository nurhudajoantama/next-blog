---
title: Mencari Pi dengan Javascript MenggunakanMetode Monte Carlo
description: Mencari Pi dengan Javascript MenggunakanMetode Monte Carlo
thumbnail: /images/circle-pi-thumb.png
date: "2021-09-15"
tags:
  - tech
  - javascript
  - coding
---

Kita tau, kita dapat mencari luas atau keliling lingkaran dengan pi (<span>&#8508;</span>), tapi sebenarnya tau tidak sih darimana asalnya bilangan yang disebut phi atau pi itu.

Dalam Wikipedia pada artikel yang berjudul [Pi](https://id.wikipedia.org/wiki/Pi). Tertulis bilangan <span>&#8508;</span> (kadang-kadang ditulis pi) adalah sebuah konstanta dalam matematika yang merupakan perbandingan keliling lingkaran dengan diameternya. Nilai <span>&#8508;</span> dalam 20 tempat desimal adalah 3,14159265358979323846. Banyak rumus dalam matematika, sains, dan teknik yang menggunakan π, yang menjadikannya salah satu dari konstanta matematika yang penting.

Daripada berlama-lama mari kita langsung coba aja mencari nilai pi menggunakan metode Monte Carlo.

##### Daftar Isi

1. [Apa Itu Metode Monte Carlo ?](#monte-carlo-method "Metode Monte Carlo")
2. [Membuat Perbandingan Untuk Mencari Pi](#simple-comparison "Perbandingan Mudah")
3. [Membuat Titik Sampel](#sample-point "Titik Sample")
4. [Membedakan Titik di Dalam Lingkaran dan di Dalam Persegi](#differentiate-inner-outter "Membedakan dalam luar")
5. [Membuat Fungsi dan Perulangan](#creating-function-and-loop "Membuat Fungsi dan Perulangan")

<h3 id="monte-carlo-method">Apa Itu Metode Monte Carlo ?</h3>

Sebelum kita menggunakan Metode Monte Carlo, mari kita ketahui dahulu apa itu Metode Monte Carlo ?, Metode Monte Carlo adalah algoritme komputasi untuk mensimulasikan berbagai perilaku sistem fisika dan matematika. Penggunaan klasik metode ini adalah untuk mengevaluasi integral definit, terutama integral multidimensi dengan syarat dan batasan yang rumit. [Metode Monte Carlo](https://id.wikipedia.org/wiki/Metode_Monte_Carlo)

Mudahnya, Metode Monte Carlo yang akan mensimulasikan berbagai perilaku, dapat dibuat secara perulangan yang acak untuk mensimulasikan banyak perilaku yang ada. Metode Monte Carlo digunakan dengan istilah sampling statistik.

Jadi pada masalah ini kita dapat menggunakan Metode Monte Carlo sebagai metode pemecah masalah karena pi merupakan perbandingan keliling lingkaran dengan diameternya. Sehingga kita dapat menggunakan perulanagan untuk membuat sampel-sampel.

<h3 id="simple-comparison">Membuat Perbandingan Untuk Mencari Pi</h3>

Seperti penjelasan pi di atas kita harus membandingkan antara lingkaran dengan diameternya atau bisa kita asumsikan sebagai persegi

![perbandingan persegi dan lingkaran](/images/circle-pi.png "perbandingan persegi dan lingkaran")

untuk mempermudah dalam menulis _code_ kita hanya perlu mengambil 1/4 bagian dari lingkaran dan juga perseginya. tetapi hal ini tidak akan berpengaruh pada perhitungan dan rumus. Tinggal kita masukkan saja beberapa _variable_ yang kita ketahui.

![rumus](/images/circle-pi-formula.png "rumus")

<h3 id="sample-point">Membuat Titik Sampel</h3>

Dari rumus yang ada kita harus membuat point-point sampel sebagai perbandingan persegi dengan lingkarannya, karena kita hanya membutuhkan 1/4 lingkaran maka kita hanya perlu membuat _random_ angka antara 0 sampai 1.

```js
const x = Math.random();
const y = Math.random();
```

<h3 id="differentiate-inner-outter">Membedakan Titik didalam Lingkaran dan didalam Persegi</h3>

Pastinya kita harus membedakan antara point di dalam lingkaran dan di dalam persegi dengan menggunakan jarak atau jari-jari lingkaraannya, karena kita membuat point random antara hanya 0 - 1 maka jarak point terluar dari lingkaran adalah satu. Maka kita dapat menggunakan kurang dari sama dengan untuk mengetahui bahwa titik itu berada di dalam lingkaran

Dalam mengukur jarak kita dapat menggunakan rumus pitagoras. Tetapi pada kasus ini kita tidak membutuhkan akar pangkat karena semua akar yang di bawah 1 akan menghasilkan angka di bawah 1 pula, dan semua yang diatas 1 akan menghasilkan angka di atas 1 pula. Tetapi terserah jika tetap ingin menggunakan akar pangkat.

```js
// with square root
const distance = Math.sqrt(x ** 2 + y ** 2);
if (distance <= 1) {
  // berada di dalam lingkaran
}
```

```js
// without square root
const distance = x ** 2 + y ** 2;
if (distance <= 1) {
  // berada di dalam lingkaran
}
```

<h3 id="creating-function-and-loop">Membuat Fungsi dan Perulangan</h3>

Setelah semua selesai dibuat kita dapat membuat dan mengetahui satu titik maka kita harus membuat banyak titik sebagai sampel dengan mengulangnya, dan membuatnya menjadi sebuah fungsi.

```js{numberLines:true}
// index.js

function findPi(manyLoop) {
  let pointInCircle = 0;
  let pointTotal = 0;

  for (let index = 0; index < manyLoop; index++) {
    const x = Math.random();
    const y = Math.random();

    const distance = x ** 2 + y ** 2;

    if (distance <= 1) {
      pointInCircle += 1;
    }
    pointTotal += 1;
  }

  return (4 * pointInCircle) / pointTotal;
}

// example
// you can change the value for loop
console.log(findPi(100));
```

Pada _code_ diatas pada baris ke pertama saya membuat fungsi baru yang bernama `findPi()`

Pada baris kedua dan ketiga saya membuat _variable_ untuk menampung hasil dari perulangan

Setelah itu saya membuat perulangan dengan banyak yang ditentukan oleh parameter fungsi `findPi()`

Anda dapat menjalankannya dengan menjalankan

```shell
node index
```

atau jika anda tidak mempunyai nodeJs anda dapat menjalankannya pada web browser anda dan melihat hasilnya pada console browser anda

```html
<script src="index.js"></script>
```

Sekian dari saya, jika anda ingin membuat _code_ tersebut dapat di visualisasikan anda dapat melihat dari [monte-carlo-pi](https://github.com/Dan-Q/monte-carlo-pi). Pada program itu dia membuat _code_ untuk lingkaran penuh dan dapat divisualisasikan pada web browser.

Saya membuat blog post ini terinspirasi dari video di channel You Tube Joma Tech. [Can you solve my favorite interview question? (math + cs)](https://youtu.be/pvimAM_SLic).

refrensi:

1. [Can you solve my favorite interview question? (math + cs)](https://youtu.be/pvimAM_SLic)
2. [Pi](https://id.wikipedia.org/wiki/Pi)
3. [Metode Monte Carlo](https://id.wikipedia.org/wiki/Metode_Monte_Carlo)
4. [monte-carlo-pi](https://github.com/Dan-Q/monte-carlo-pi)
