/* =====================================
   SMARTQ JAVASCRIPT
===================================== */

/* MENU NAVIGASI */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}


/* TESTIMONI */

const testimonials = [
    {
        text: "Belajar di SmartQ menjadi pengalaman yang menyenangkan. Materi dijelaskan dengan cara yang mudah dipahami dan membantu saya lebih percaya diri dalam belajar.",
        name: "Muhammad Fadi Aldiansyah",
        role: "Peserta Bimbingan"
    },
    {
        text: "Pembelajaran yang terarah dapat membantu siswa memahami materi dengan lebih baik. Suasana belajar yang nyaman juga membuat kegiatan belajar lebih menyenangkan.",
        name: "Latisha Nur Fazwa",
        role: "Peserta Bimbingan"
    },
    {
        text: "Pendampingan belajar yang baik membantu anak membangun kebiasaan belajar dan mengembangkan kemampuan akademiknya secara bertahap.",
        name: "Ummi Anifah",
        role: "Mentor/Pengajar"
    }
];

let currentTestimonial = 0;

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");
const testimonialRole = document.getElementById("testimonialRole");
const testimonialNumber = document.getElementById("testimonialNumber");

function showTestimonial(index) {

    if (!testimonialText) return;

    currentTestimonial = (index + testimonials.length) % testimonials.length;

    const item = testimonials[currentTestimonial];

    testimonialText.textContent = item.text;
    testimonialName.textContent = item.name;
    testimonialRole.textContent = item.role;

    testimonialNumber.textContent =
        "0" + (currentTestimonial + 1) + " / 0" + testimonials.length;
}

const nextButton = document.getElementById("nextTestimonial");
const prevButton = document.getElementById("prevTestimonial");

if (nextButton) {
    nextButton.addEventListener("click", function () {
        showTestimonial(currentTestimonial + 1);
    });
}

if (prevButton) {
    prevButton.addEventListener("click", function () {
        showTestimonial(currentTestimonial - 1);
    });
}


/* FORM PENDAFTARAN WHATSAPP */

const registrationForm = document.getElementById("registrationForm");

// GANTI DENGAN NOMOR WHATSAPP RESMI SMARTQ
// Format: 62 + nomor HP tanpa angka 0 di depan
const whatsappNumber = "6287879990326";

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const parentName =
            document.getElementById("parentName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const program =
            document.getElementById("programChoice").value;

        const message =
            document.getElementById("message").value.trim();

        if (!studentName || !parentName || !phone || !program) {
            alert("Mohon lengkapi semua data pendaftaran!");
            return;
        }

        const whatsappMessage =
`Halo SmartQ! Saya ingin mendaftarkan siswa.

Nama Siswa: ${studentName}
Nama Orang Tua: ${parentName}
Nomor WhatsApp: ${phone}
Program yang Diminati: ${program}

Pesan Tambahan:
${message || "-"}

Mohon informasi lebih lanjut mengenai jadwal dan pendaftaran.

Terima kasih.
`;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}