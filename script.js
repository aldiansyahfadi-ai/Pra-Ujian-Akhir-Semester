/* =========================================
   SMARTQ JAVASCRIPT
   INTERACTIVE WEBSITE
========================================= */

/* =========================================
   1. NOMOR WHATSAPP SMARTQ
========================================= */

// GANTI NOMOR DI BAWAH INI DENGAN NOMOR
// WHATSAPP ADMIN SMARTQ YANG SEBENARNYA.
//
// Format: 62 + nomor HP tanpa angka 0 di depan.
// Contoh: 081234567890 menjadi 6281234567890.

const WHATSAPP_NUMBER = "6287879990326";

function openWhatsApp(message = "Halo SmartQ, saya ingin mengetahui informasi bimbingan belajar.") {
    const number = WHATSAPP_NUMBER.replace(/\D/g, "");

    if (number.length < 10 || number === "6281234567890") {
        alert("Silakan ganti nomor WhatsApp contoh di file script.js dengan nomor WhatsApp SmartQ yang sebenarnya.");
        return;
    }

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================
   2. SEMUA TOMBOL WHATSAPP
========================================= */

document.querySelectorAll("[data-wa]").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        openWhatsApp();
    });
});

/* =========================================
   3. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
            }
        });
    });
}

/* =========================================
   4. TESTIMONI SLIDER
========================================= */

const slides = document.querySelectorAll(".testimonial-slide");
const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");
const counter = document.getElementById("slideCounter");

let currentSlide = 0;

function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (counter) {
        const current = String(index + 1).padStart(2, "0");
        const total = String(slides.length).padStart(2, "0");

        counter.textContent = `${current} / ${total}`;
    }
}

if (nextButton && prevButton && slides.length > 0) {

    nextButton.addEventListener("click", () => {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

    prevButton.addEventListener("click", () => {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

/* =========================================
   5. FORM PENDAFTARAN KE WHATSAPP
========================================= */

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const orangtua = document.getElementById("orangtua").value.trim();
        const nomor = document.getElementById("nomor").value.trim();
        const usia = document.getElementById("usia").value.trim();
        const program = document.getElementById("program").value;
        const pesan = document.getElementById("pesan").value.trim();

        if (!nama || !orangtua || !nomor || !usia || !program) {
            alert("Mohon lengkapi semua data pendaftaran!");
            return;
        }

        const phoneDigits = nomor.replace(/\D/g, "");

        if (phoneDigits.length < 9 || phoneDigits.length > 15) {
            alert("Mohon masukkan nomor WhatsApp yang valid.");
            return;
        }

        const message =
`HALO SMARTQ! 👋
Saya ingin mendaftarkan peserta bimbingan belajar.

📚 PENDAFTARAN SMARTQ

Nama Siswa: ${nama}
Nama Orang Tua/Wali: ${orangtua}
Nomor WhatsApp: ${nomor}
Usia/Kelas: ${usia}
Program Pilihan: ${program}

Pesan Tambahan:
${pesan || "-"}

Mohon informasi lebih lanjut mengenai pendaftaran, jadwal, dan biaya belajar.

Terima kasih.
SmartQ - Learn, Practice, Grow.`;

        openWhatsApp(message);
    });
}

/* =========================================
   6. ANIMASI SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
    ".program-card, .team-card, .advantage-item, .package-card, .material-item"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                obs.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity .6s ease, transform .6s ease";

        observer.observe(element);
    });
}

console.log("SmartQ Website berhasil dijalankan!");