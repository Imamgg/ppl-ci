const mahasiswaData = {
  nim: "230411100198",
  nama: "IMAM SYAFII",
  prodi: "Teknik Informatika",
  fakultas: "Fakultas Teknik",
  angkatan: "2023",
  email: "230411100198@student.trunojoyo.ac.id",
};

function validateNIM(nim) {
  return /^\d+$/.test(nim) && nim.length >= 8;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateMahasiswa(data) {
  if (!data.nim || !validateNIM(data.nim)) {
    return { valid: false, message: "NIM tidak valid" };
  }
  if (!data.nama || data.nama.trim().length < 3) {
    return { valid: false, message: "Nama tidak valid" };
  }
  if (!data.email || !validateEmail(data.email)) {
    return { valid: false, message: "Email tidak valid" };
  }
  if (!data.prodi || data.prodi.trim().length < 3) {
    return { valid: false, message: "Program Studi tidak valid" };
  }
  return { valid: true, message: "Data valid" };
}

function displayMahasiswaData(data) {
  const validation = validateMahasiswa(data);

  if (!validation.valid) {
    console.error("Validasi gagal:", validation.message);
    return false;
  }

  document.getElementById("nim").textContent = data.nim;
  document.getElementById("nama").textContent = data.nama;
  document.getElementById("prodi").textContent = data.prodi;
  document.getElementById("fakultas").textContent = data.fakultas;
  document.getElementById("angkatan").textContent = data.angkatan;
  document.getElementById("email").textContent = data.email;

  console.log("Data mahasiswa berhasil ditampilkan");
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  displayMahasiswaData(mahasiswaData);
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validateNIM,
    validateEmail,
    validateMahasiswa,
    displayMahasiswaData,
  };
}
