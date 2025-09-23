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
const navLinksList = document.querySelectorAll(".nav-links a");
navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});

// for shows tab
const tabShowsLinks = document.querySelectorAll(".shows-link");
const tabShowsContents = document.querySelectorAll(".shows-content");

tabShowsLinks.forEach((link) => {
    link.addEventListener("click", () => {
        tabShowsLinks.forEach((btn) => btn.classList.remove("active"));
        tabShowsContents.forEach((content) => content.classList.remove("active"));

        link.classList.add("active");
        document.getElementById(link.dataset.tab).classList.add("active");
    });
});

// for overlay click
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.ent-card');

    cards.forEach(card => {
        // toggle รายละเอียดเมื่อกดที่ card (ยกเว้นปุ่ม play)
        card.addEventListener('click', (event) => {
            if (!event.target.closest('.play_btn')) {
                cards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('show-details');
                    }
                });
                card.classList.toggle('show-details');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.ent-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // สลับคลาส 'show-details' ทุกครั้งที่แตะ
            card.classList.toggle('show-details');
        });
    });
});