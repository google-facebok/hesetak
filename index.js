function toggleMenu() {
    document.getElementById("langMenu").classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
    const langMenu = document.getElementById("langMenu");
    const langButton = event.target.closest("[onclick='toggleMenu()']");

    if (langMenu && !langButton && !langMenu.contains(event.target)) {
        langMenu.classList.add("hidden");
    }
});

const buttons = document.querySelectorAll("#button-group button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sideMenu = document.getElementById("sideMenu");
const sideMenuContent = document.getElementById("sideMenuContent");

if (mobileMenuBtn && closeMenuBtn && sideMenu && sideMenuContent) {
    mobileMenuBtn.addEventListener("click", () => {
        sideMenu.classList.remove("hidden");
        setTimeout(() => {
            sideMenuContent.classList.remove("translate-x-full");
        }, 10);
    });

    closeMenuBtn.addEventListener("click", () => {
        sideMenuContent.classList.add("translate-x-full");
        setTimeout(() => {
            sideMenu.classList.add("hidden");
        }, 300);
    });

    sideMenu.addEventListener("click", (e) => {
        if (e.target === sideMenu) {
            closeMenuBtn.click();
        }
    });

    // Handle clicks inside mobile menu
    sideMenuContent.addEventListener("click", (e) => {
        if (e.target.tagName === "A" || e.target.closest("A")) {
            closeMenuBtn.click();
        }
    });
}
