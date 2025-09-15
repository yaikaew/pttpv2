// เปิดลิ้งค์
function openLink(url) {
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

// for film tab
const filmLinks = document.querySelectorAll(".film-link");
const filmContents = document.querySelectorAll(".film-content");

filmLinks.forEach((link) => {
    link.addEventListener("click", () => {
        filmLinks.forEach((btn) => btn.classList.remove("active"));
        filmContents.forEach((content) => content.classList.remove("active"));

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

// for overlay click
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.ent-card');

    cards.forEach(card => {
        // Add click event listener for mobile devices
        card.addEventListener('click', (event) => {
            // Remove 'show-details' class from all other cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('show-details');
                }
            });

            // Toggle the 'show-details' class on the clicked card
            card.classList.toggle('show-details');

            // If the click is on the play button, open the link
            if (event.target.closest('.play_btn')) {
                const link = card.dataset.link;
                if (link) {
                    window.open(link, '_blank');
                }
            }
        });
    });
});