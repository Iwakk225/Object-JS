// membuat object
// 1. object literal

var siswa1 = {
    nama : "Muhammad Aditya Rahmansyah",
    kelas : "XI RPL 1",
    umur : 18,
    jurusan : "Rekayasa Perangkat Lunak",
    email : "muhammadadityarahmansyah18@gmail.com"
}

var siswa2 = {
    nama : "Raditya Nala",
    kelas : "XI RPL 1",
    umur : 18,
    jurusan : "Rekayasa Perangkat Lunak",
    email : "radityanala316@gmail.com"
}


// 2. function declaration
// membuat object dengan function declaration
function buatObjectSiswa(nama, kelas, umur, jurusan, email) {
    var siswa = {};
    siswa.nama = nama;
    siswa.kelas = kelas;
    siswa.umur = umur;
    siswa.jurusan = jurusan;
    siswa.email = email;
    return siswa;
}

var siswa3 = buatObjectSiswa("Budi", "XI RPL 1", 18, "Rekayasa Perangkat Lunak", "budi@gmail.com");

// 3. constructor

function Siswa(nama, kelas, umur, jurusan, email) {
    // this keyword digunakan untuk mengacu pada object yang sedang dibuat
    this.nama = nama;
    this.kelas = kelas;
    this.umur = umur;
    this.jurusan = jurusan;
    this.email = email;
    // return this; // tidak perlu menuliskan return this, karena secara otomatis constructor akan mengembalikan object yang dibuat
}

var siswa4 = new Siswa("Andi", "XI RPL 1", 18, "Rekayasa Perangkat Lunak", "andi@gmail.com");