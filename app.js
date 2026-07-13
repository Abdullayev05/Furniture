document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); 
    const navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        
       
        if (href.includes(page) || (page === "" && href === "index.html")) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function toggleDropdown(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
    content.classList.toggle('show');
    if (arrow) arrow.classList.toggle('rotate');
    
    content.style.display = ''; 
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(content => {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                content.style.display = 'none';
                const arrow = content.previousElementSibling.querySelector('.arrow');
                if (arrow) arrow.classList.remove('rotate');
            }
        });
    }
}


function toggleMenuWithAnimation(element) {
    element.classList.toggle("active");
    
    toggleMenu(); 
}