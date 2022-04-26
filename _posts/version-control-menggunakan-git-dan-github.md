---
title: Version Control Menggunakan Git dan Github
description: Menggunakan Git dan Github Sebagai Version Control
thumbnail: /images/thumb-VCS-git-github.png
date: "2022-04-26"
tags:
  - tech
  - version control
  - git
  - github
---

## Version Control System

Version control sudah menjadi hal yang penting bagi seorang pengembang aplikasi, apalagi jika kita menggembangkan aplikasi yang cukup besar. Dengan menggunakan version control kita dapat melacak kembali perubahan yang terjadi dan juga dapat dengan mudah berkolaborasi dengan orang lain yang juga mengembangkan aplikasi yang sama.

Sebenarnya apa sih version control itu sendiri?

Menurut [Atlassian](https://www.atlassian.com/git/tutorials/what-is-version-control), version control system (VCS) adalah sebuah kumpulan perangkat lunak yang sudah terintegrasi dan digunakan untuk membantu software engineer mengelola perubahan dalam source code dari waktu ke waktu.

Dengan kita dapat mengelola perubahan kode dari waktu ke waktu, jika terdapat masalah pada kode yang baru saja dilakukan peubahan, kita dapat melacak darimana datangnya masalah atau kesala yang terjadi dari program tersebut

Terdapat beberapa jenis version control system yang mempunyai fungsinya masing-masing diantaranya :

1. Local Version Control System
1. Centralized Version Control System
1. Distributed Version Control System

## Git

_Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency._

Seperti yang sudah tertulis pada halaman website Git, Git merupakan open source distributed version control, yang berarti Git adalah version control yang dapat kita gunakan secara gratis dan memiliki jenis terdistribusi.

## GitHub

_GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere._

Github memungkinkan kita untuk berkolaborasi dengan orang lain yang tersambung ke jaringan internet.

## Inisialisasi Git

Untuk menggunakan git dalam project kita, kita harus menginisialisasi git kedalam project tersebut. Pastikan dalam perangkat anda sudah terinstall Git, jika belum terdapat silahkan download git pada halaman websitenya [Git Downlaods](https://git-scm.com/downloads).

Inisialisasi git dapat dilakukan dengan menjalankan perintah berikut pada terminal di direktory tempat project anda berada

```bash
git init
```

Setelah melakuakn inisialisasi Git akan secara otomatis membuatkan directory `.git`. Tandanya inisialisasi git berhasil.

## Commit project kedalam git

Untuk dapat melacak perubahan yang ada kita harus menyimpan perubahan tersebut kedalam git dengan cara melakukan commit. yang dapat dilakuakan dengan perintah

```bash
# memasukkan project kedalam staging area
git add .

# melakukan commit dengan pesan initial commit
git commit -m "initial commit"
```

untuk melakukan commit kita diharuskan untuk memasukkan perubahan kedalam staging area terlebih dahulu. barulah setelah itu dapat melakukan commit, setiap commit haruslah memiliki sebuah pesan.

setiap commit juga memiliki hash masing-masing yang pastinya berbeda, kita dapat melihatnya dengan mengjalankan perintah

```bash
git log
```

## Membuat repository pada GitHub

Untuk menggunakan github, atau memasukkan kode project kita ke github kita harus membuat repositorynya terlebih dahulu. Dan yang pastinya anda harus memiliki akun github terlebih dahulu, jika tidak punya dapat membuatnya pada [GitHub SignUp](https://github.com/signup). Setelah itu masuk kedalam dashboard dari github tersebut.

Pada halaman dashboard terdapat tomobol new untuk membuat repository baru, anda dapat menekan tombol tersebut atau silahkan ke halaman berikut [GitHub New](https://github.com/new).

Setelah itu anda dapat mengisikan Repository Name, Description, Visibility dan lainnya, Silahkan isikan sesuai dengan kebutuhan anda.

## Push Project ke GitHub

Setelah itu anda dapat langsung menjalankan perintah yang terdapat secara otomatis pada halaman github atau anda dapat menjalankan perintah seperti berikut

```bash
git remote add origin {URL REPOSITORY}
git push -u origin master
```

ganti URL REPOSITORY dengan url repository anda yang terdapat pada halaman tersebut.

Setelah itu silahkan masukkan Username dan Password dari akun GitHub anda, jika terdapat kesalahan dan meminta _personal access token_ anda dapat mendapatkan access token tersebut pada `Setting > Developer Setting > Personal Access Token` atau pada [GitHub Tokens](https://github.com/settings/tokens), lalu anda dapat membuat token beru dengan mengklik tombol `Generate New Token`, lalu memberikan notes pada token (disesuaikan sesuai kegunaan) dan menceklist scope yang diperlukan, jika hanya untuk push anda dapat menceklist pada scope `Repo` saja.

Jika semua sudah benar, git akan langsung melakukan push project anda ke repository dalam github.

Setelah selesai anda dapat langsung melihat kode anda yang sudah terdapat dalam github, dan sudah dapat melakukan kolaborasi dengan orang lain.

Referensi :

- [https://glints.com/id/lowongan/version-control-system](https://glints.com/id/lowongan/version-control-system)
- [https://www.atlassian.com/git/tutorials/what-is-version-control](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [https://git-scm.com/](https://git-scm.com/)
- [https://docs.github.com/en/get-started/quickstart/hello-world](https://git-scm.com/)
