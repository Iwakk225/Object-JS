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