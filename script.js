// Ganti dengan email kamu agar formulir kontak berfungsi
const EMAIL_TUJUAN = "emailkamu@contoh.com";

const root = document.documentElement;

// 1. Pilih bunga: mengubah warna tema halaman
document.querySelectorAll(".picker button").forEach((btn) => {
  btn.addEventListener("click", () => {
    root.style.setProperty("--bloom", btn.dataset.bloom);
    root.style.setProperty("--soft", btn.dataset.soft);
    root.style.setProperty("--on-bloom", btn.dataset.on);
    document.querySelectorAll(".picker button").forEach((b) =>
      b.setAttribute("aria-pressed", b === btn ? "true" : "false")
    );
  });
});

// 2. Menu untuk layar kecil
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// 3. Formulir kontak: validasi lalu buka aplikasi email
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = e.target.nama.value.trim();
  const pesan = e.target.pesan.value.trim();
  const error = document.getElementById("error");

  if (!nama || !pesan) {
    error.textContent = "Isi nama dan pesan terlebih dahulu.";
    return;
  }
  error.textContent = "";
  const subjek = encodeURIComponent(`Pesan dari ${nama}`);
  const isi = encodeURIComponent(pesan);
  window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subjek}&body=${isi}`;
});

// 4. Tahun otomatis di footer
document.getElementById("tahun").textContent = new Date().getFullYear();
