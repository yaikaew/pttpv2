// เปิดลิ้งค์
function openVideo(url) {
    window.open(url, "_blank");
}

// เมนู
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

// ปิดเมนูเมื่อคลิกลิงก์
const navLinksList = document.querySelectorAll(".nav__links a");
navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});

// ไฮไลท์เมนูขณะเลื่อน
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__links li a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${entry.target.id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.3, // เห็น section 30% ถึงจะ active
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

// for discography tab
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
        tabLinks.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        link.classList.add("active");
        document.getElementById(link.dataset.tab).classList.add("active");
    });
});

// for shows tab
const tabLinks2 = document.querySelectorAll(".tab-link-2");
const tabContents2 = document.querySelectorAll(".tab-content-2");

tabLinks2.forEach((link) => {
    link.addEventListener("click", () => {
        tabLinks2.forEach((btn) => btn.classList.remove("active"));
        tabContents2.forEach((content) => content.classList.remove("active"));

        link.classList.add("active");
        document.getElementById(link.dataset.tab).classList.add("active");
    });
});