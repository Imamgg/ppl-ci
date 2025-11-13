// Unit Test untuk Validasi
console.log("Menjalankan Unit Test...\n");

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✓ PASS: ${testName}`);
    testsPassed++;
    return true;
  } else {
    console.error(`✗ FAIL: ${testName}`);
    testsFailed++;
    return false;
  }
}

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

console.log("Test Suite 1: Validasi NIM");
console.log("---------------------------");
assert(validateNIM("123456789"), "NIM valid (9 digit)");
assert(validateNIM("12345678"), "NIM valid (8 digit)");
assert(!validateNIM("1234567"), "NIM tidak valid (kurang dari 8 digit)");
assert(!validateNIM("12345abc"), "NIM tidak valid (mengandung huruf)");
assert(!validateNIM(""), "NIM tidak valid (kosong)");
console.log("");

console.log("Test Suite 2: Validasi Email");
console.log("-----------------------------");
assert(validateEmail("test@university.ac.id"), "Email valid");
assert(validateEmail("student@gmail.com"), "Email valid (Gmail)");
assert(!validateEmail("invalid-email"), "Email tidak valid (tanpa @)");
assert(!validateEmail("test@"), "Email tidak valid (tanpa domain)");
assert(
  !validateEmail("@university.ac.id"),
  "Email tidak valid (tanpa username)"
);
assert(!validateEmail(""), "Email tidak valid (kosong)");
console.log("");

console.log("Test Suite 3: Validasi Data Mahasiswa Lengkap");
console.log("----------------------------------------------");

const validMahasiswa = {
  nim: "230411100198",
  nama: "IMAM SYAFII",
  prodi: "Teknik Informatika",
  fakultas: "Fakultas Teknik",
  angkatan: "2023",
  email: "230411100198@student.trunojoyo.ac.id",
};

const invalidMahasiswaNIM = { ...validMahasiswa, nim: "123" };
const invalidMahasiswaNama = { ...validMahasiswa, nama: "AB" };
const invalidMahasiswaEmail = { ...validMahasiswa, email: "invalid" };
const invalidMahasiswaProdi = { ...validMahasiswa, prodi: "TI" };

assert(validateMahasiswa(validMahasiswa).valid, "Data mahasiswa valid");
assert(
  !validateMahasiswa(invalidMahasiswaNIM).valid,
  "Data mahasiswa tidak valid (NIM kurang)"
);
assert(
  !validateMahasiswa(invalidMahasiswaNama).valid,
  "Data mahasiswa tidak valid (Nama terlalu pendek)"
);
assert(
  !validateMahasiswa(invalidMahasiswaEmail).valid,
  "Data mahasiswa tidak valid (Email salah)"
);
assert(
  !validateMahasiswa(invalidMahasiswaProdi).valid,
  "Data mahasiswa tidak valid (Prodi terlalu pendek)"
);
console.log("");

console.log("Test Suite 4: Validasi Struktur HTML");
console.log("-------------------------------------");

const fs = require("fs");
const path = require("path");

try {
  const htmlContent = fs.readFileSync(
    path.join(__dirname, "index.html"),
    "utf8"
  );

  assert(htmlContent.includes("<!DOCTYPE html>"), "HTML memiliki DOCTYPE");
  assert(htmlContent.includes("<html"), "HTML memiliki tag html");
  assert(htmlContent.includes("<head>"), "HTML memiliki tag head");
  assert(htmlContent.includes("<body>"), "HTML memiliki tag body");
  assert(
    htmlContent.includes('id="nim"'),
    "HTML memiliki element dengan id nim"
  );
  assert(
    htmlContent.includes('id="nama"'),
    "HTML memiliki element dengan id nama"
  );
  assert(
    htmlContent.includes('id="email"'),
    "HTML memiliki element dengan id email"
  );
  assert(htmlContent.includes("style.css"), "HTML terhubung dengan CSS");
  assert(htmlContent.includes("script.js"), "HTML terhubung dengan JavaScript");
} catch (error) {
  console.error(`✗ FAIL: Tidak dapat membaca file HTML - ${error.message}`);
  testsFailed++;
}
console.log("");

console.log("Test Suite 5: Validasi Keberadaan File");
console.log("---------------------------------------");

assert(
  fs.existsSync(path.join(__dirname, "index.html")),
  "File index.html ada"
);
assert(fs.existsSync(path.join(__dirname, "style.css")), "File style.css ada");
assert(fs.existsSync(path.join(__dirname, "script.js")), "File script.js ada");
assert(
  fs.existsSync(path.join(__dirname, "package.json")),
  "File package.json ada"
);
console.log("");

console.log("=================================");
console.log("Hasil Test:");
console.log(`✓ Berhasil: ${testsPassed}`);
console.log(`✗ Gagal: ${testsFailed}`);
console.log("=================================");

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log("\n✓ Semua test berhasil!");
  process.exit(0);
}
