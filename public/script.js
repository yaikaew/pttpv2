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

// Function to add event listeners to all cards
function addCardEventListeners() {
    document.querySelectorAll('.ent-card').forEach(card => {
        // Toggle details on click/touch
        card.addEventListener('click', (event) => {
            // Prevent link from triggering
            const isLink = event.target.closest('.play_btn');
            if (isLink) {
                return;
            }

            // Hide details of other cards before toggling the clicked one
            document.querySelectorAll('.ent-card.show-details').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('show-details');
                }
            });

            card.classList.toggle('show-details');
        });
    });

    // Handle clicks outside the cards to close all open details
    document.body.addEventListener('click', (event) => {
        const isInsideCard = event.target.closest('.ent-card');
        if (!isInsideCard) {
            document.querySelectorAll('.ent-card.show-details').forEach(card => {
                card.classList.remove('show-details');
            });
        }
    });
}