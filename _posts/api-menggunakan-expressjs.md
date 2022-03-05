---
title: API menggunakan ExpressJS
description: cara membuat API menggunakan ExpressJS
thumbnail: /images/api-menggunakan-express.png
date: "2021-09-06"
tags:
  - tech
  - javascript
  - coding
---

kali ini saya akan menjelaskan tentang bagaimana cara membuat API dengan ExpressJS

sekarang saya aumsikan bahwa anda sudah mengerti tentang Javascript, NodeJS dan telah menginstall Node dan NPM atau _package manager_ apapun pada komputer anda

##### Daftar Isi

1. [Menginstall ExpressJS](#installation-express "Menginstall ExpressJS")
2. [Membuat Server](#making-server "Membuat Server")
3. [Routing pada express](#express-routing "Routing pada express")
4. [Express Respond](#express-respond "Express Respond")

<h3 id="installation-express">Menginstall ExpressJS</h3>

Pastinya kita harus menginstall express terlebih dahulu untuk menggunakannya

Tetapi sebelum itu kita harus menginisiasi sebuah project baru pada directory kosong dengan cara

```shell
npm init -y
```

flag -y agar project dibuat secara langsung tanpa adanya pertanyaan. Lalu setelahnya baru kita menginstall express pada project kita

```shell
npm install express
```

lalu tunggu, setelah selesai hasilnya akan seperti gambar

![install-express](/images/install-express-api.jpg "install-express")

setelah itu kita dapat membuka code editor kita dan mengarahkannya pada directory tempat kita menyimpan project

<h3 id="making-server">Membuat Server</h3>

Setelah itu kita dapat membuat file server.js ataupun index.js, di dalamnya kita dapat mengisikan

```js{numberLines:true}
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`listen in http://localhost:3000`);
});
```

anda juga bisa mengganti port dengan mengganti angka 3000 pada baris ke-4

Setelah itu anda dapat mencoba menjalankan server dengan menjalankan `shell>node index` atau `shell>node server`

![test-run-express](/images/test-run-express-api.jpg "test-run-express")

<h3 id="express-routing">Routing pada express</h3>

Routing pada express sangat mudah

```js
app.METHOD(path, callback [, callback ...])
```

METHOD yang terdapat pada express diantaranya `js>app.get() app.post() app.put()` dan masih terdapat lagi, anda dapat cek pada [dokumentasi express](https://expressjs.com/ "expressJS")

pada kasus kita kita dapat memberikan `js>app.get()` sehingga pada get _request_ kita akan memberikan _respond_-nya

```js
app.get("/", (req, res) => {});
```

<h3 id="express-respond">Express Respond</h3>

Pastinya setiap request yang kita kirim kita mengharapkan balasan maka dari itu, pada express terdapat respond. respond pada express dituliskan sebagai _callback_ dari request yang kita tulis

```js
app.get("/", (req, res) => {
  res.status(200);
});
```

karena akan membuat _API_ maka respond harus berupa _JSON_ maka kita dapat menulis `js>res.json()`

```js
app.get("/", (req, res) => {
  res.status(200);
  res.json({
    status: 200,
    data: "berhasil membuat API dengan express",
  });
});
```

lalu jalankan kembali servernya dengan `shell>node server` dan buka pada browser

![result-express](/images/result-express-api.png "result-express")

_API_ dengan menggunakan expressJS sudah jalan, sekarang anda dapat menambahkan konten atau membuat _API_ dengan express, untuk memperdalam pengetahuan anda juga dapat membaca [dokumentasi express](https://expressjs.com/ "expressJS")

Sekian dulu. Terimakasih
