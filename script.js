// ==========================================
// 1. HAMBURGER MENU TUGGLE (Memenuhi Event Listener & DOM)
// ==========================================
const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarMenu = document.querySelector(".navbar__menu");

if (hamburgerBtn && navbarMenu) {
    hamburgerBtn.addEventListener("click", function () {
        navbarMenu.classList.toggle("navbar__menu--active");
    });
}

// ==========================================
// 2. TAB NAVIGATION (Dari detail.html)
// ==========================================
const tabButtons = document.querySelectorAll(".detail-tabs__link");
const tabContents = document.querySelectorAll(".tab-content");

if (tabButtons.length > 0) {
    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const target = button.getAttribute("data-tab");

            tabButtons.forEach(item => item.classList.remove("detail-tabs__link--active"));
            tabContents.forEach(content => content.classList.remove("tab-content--active"));

            button.classList.add("detail-tabs__link--active");
            document.getElementById(target).classList.add("tab-content--active");
        });
    });
}

// ==========================================
// 3. MOBILE FILTER (Dari index.html)
// ==========================================
const filterToggle = document.getElementById("filterToggle");
const filterBox = document.querySelector(".filter-box");

if (filterToggle && filterBox) {
    const filterArrow = filterToggle.querySelector(".mobile-filter__arrow");
    filterToggle.addEventListener("click", function () {
        const isOpen = filterBox.classList.contains("filter-box--mobile-active");
        if (isOpen) {
            filterBox.classList.remove("filter-box--mobile-active");
            filterToggle.setAttribute("aria-expanded", "false");
            filterArrow.textContent = "▼";
        } else {
            filterBox.classList.add("filter-box--mobile-active");
            filterToggle.setAttribute("aria-expanded", "true");
            filterArrow.textContent = "▲";
        }
    });
}

// ==========================================
// 4. FORMAT ANGKA & VALIDASI MANUAL JAVASCRIPT (Progress 3)
// ==========================================

// --- A. Format Otomatis Input Biaya (Titik Ribuan) ---
const inputBiaya = document.getElementById("biayaDaftar");

if (inputBiaya) {
    inputBiaya.addEventListener("input", function(e) {
        // Hapus semua karakter yang bukan angka secara instan
        let nilaiAngka = this.value.replace(/[^0-9]/g, '');
        
        // Sisipkan titik gaya Indonesia (misal: 50.000)
        if (nilaiAngka !== "") {
            this.value = parseInt(nilaiAngka, 10).toLocaleString('id-ID');
        } else {
            this.value = "";
        }
    });
}

// --- B. Fungsi Bantuan untuk Menampilkan/Menghapus Error ---
function tampilkanError(idInput, pesan) {
    const errorElement = document.getElementById(`error-${idInput}`);
    const inputElement = document.getElementById(idInput);
    if (errorElement && inputElement) {
        errorElement.textContent = pesan;
        errorElement.style.display = "block";
        inputElement.classList.add("input-error");
    }
}

function hapusError(idInput) {
    const errorElement = document.getElementById(`error-${idInput}`);
    const inputElement = document.getElementById(idInput);
    if (errorElement && inputElement) {
        errorElement.style.display = "none";
        inputElement.classList.remove("input-error");
    }
}

// --- C. Validasi Form Saat Tombol Kirim Diklik ---
const formPromosi = document.getElementById("form-promosi");
const pesanSukses = document.getElementById("pesan-sukses");

if (formPromosi) {
    formPromosi.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah browser melakukan reload halaman

        let formValid = true;

        // 1. Ambil nilai input dari form
        const nama = document.getElementById("namaOrganisasi").value.trim();
        const email = document.getElementById("emailKontak").value.trim();
        const kategori = document.getElementById("kategoriLomba").value;
        
        // Ambil nilai biaya dan buang titiknya agar bisa divalidasi
        const biayaMentah = document.getElementById("biayaDaftar").value.trim();
        const biaya = biayaMentah.replace(/\./g, ''); 

        // 2. Bersihkan semua pesan error sebelum mengecek ulang
        hapusError("namaOrganisasi");
        hapusError("emailKontak");
        hapusError("kategoriLomba");
        hapusError("biayaDaftar");
        if (pesanSukses) pesanSukses.style.display = "none";

        // 3. Aturan Validasi 1: Nama Wajib Diisi & Minimal 3 Karakter
        if (nama === "") {
            tampilkanError("namaOrganisasi", "Nama penyelenggara tidak boleh kosong.");
            formValid = false;
        } else if (nama.length < 3) {
            tampilkanError("namaOrganisasi", "Nama penyelenggara minimal 3 karakter.");
            formValid = false;
        }

        // 4. Aturan Validasi 2: Format Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            tampilkanError("emailKontak", "Alamat email tidak boleh kosong.");
            formValid = false;
        } else if (!emailRegex.test(email)) {
            tampilkanError("emailKontak", "Format email tidak valid (contoh@email.com).");
            formValid = false;
        }

        // 5. Aturan Validasi 3: Kategori Wajib Dipilih
        if (kategori === "") {
            tampilkanError("kategoriLomba", "Silakan pilih kategori lomba.");
            formValid = false;
        }

        // 6. Aturan Validasi 4: Biaya Tidak Boleh Kosong
        if (biayaMentah === "") {
            tampilkanError("biayaDaftar", "Biaya pendaftaran tidak boleh kosong.");
            formValid = false;
        } 

        // 7. Proses Jika Semua Aturan Lolos
        if (formValid) {
            if (pesanSukses) pesanSukses.style.display = "block"; // Munculkan kotak hijau
            formPromosi.reset(); // Kosongkan form kembali
        }
    });
}