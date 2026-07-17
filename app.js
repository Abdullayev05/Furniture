document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider-container img");
    
    if (slides.length > 0) {
        let currentIndex = 0;

        // 1. SƏHİFƏ AÇILAN KİMİ İLK ŞƏKLİ AKTİV ET
        slides[currentIndex].classList.add("active");

        function changeSlide() {
            // Köhnəni gizlə
            slides[currentIndex].classList.remove("active");
            
            // Yeni indeksi tap
            currentIndex = (currentIndex + 1) % slides.length;
            
            // Yenini göstər
            slides[currentIndex].classList.add("active");
        }

        // 2. Hər 4 saniyədən bir avtomatik dəyişir
        setInterval(changeSlide, 4000);
    }
    
    // ... menyu və digər kodların ...
});
// 3. Menyunu açan funksiya (Animasiya ilə)
function toggleMenu(element) {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
    if (element) {
        element.classList.toggle("active");
    }
}

// 4. Dropdown funksiyası
function toggleDropdown(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Digər açıq dropdown-ları bağla ki, konflikt olmasın
    document.querySelectorAll('.dropdown-content').forEach(item => {
        if (item !== content) {
            item.classList.remove('show');
            const parent = item.parentElement;
            const otherArrow = parent.querySelector('.arrow');
            if (otherArrow) otherArrow.classList.remove('rotate');
        }
    });

    content.classList.toggle('show');
    if (arrow) {
        arrow.classList.toggle('rotate');
    }
}

// 5. Kənara kliklədikdə hər şeyi bağlayan funksiya
window.onclick = function (event) {
    // 1. DROP-DOWN-LARI BAĞLAMAQ ÜÇÜN
    // Əgər kliklənən element .dropbtn və ya onun uşağı deyilsə, hər şeyi bağla
    if (!event.target.closest('.dropbtn')) {
        document.querySelectorAll('.dropdown-content.show').forEach(content => {
            content.classList.remove('show');
            const arrow = content.parentElement.querySelector('.arrow');
            if (arrow) arrow.classList.remove('rotate');
        });
    }

    // 2. HAMBURGER MENYUNU BAĞLAMAQ ÜÇÜN
    const navLinks = document.querySelector(".nav-links");
    const menuBtn = document.querySelector(".hamburger"); 

    if (navLinks && navLinks.classList.contains("active") &&
        !event.target.closest('.nav-links') && 
        !event.target.closest('.hamburger')) {
        
        navLinks.classList.remove("active");
        if (menuBtn) menuBtn.classList.remove("active");
    }
}