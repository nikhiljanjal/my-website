alert("Script Loaded");

/*==============================
        POPUP
==============================*/

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.addEventListener("click", function (event) {
    const popup = document.getElementById("popup");

    if (event.target === popup) {
        popup.style.display = "none";
    }
});

/*==============================
        MOBILE MENU
==============================*/

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

/*==============================
      MOBILE DROPDOWN
==============================*/

document.querySelectorAll(".dropdown > a").forEach(function (item) {

    item.addEventListener("click", function (e) {

        if (window.innerWidth <= 768) {

            e.preventDefault();

            const submenu = this.nextElementSibling;

            document.querySelectorAll(".submenu").forEach(function (menu) {
                if (menu !== submenu) {
                    menu.classList.remove("show");
                }
            });

            submenu.classList.toggle("show");
        }

    });

});

/*==============================
      CLOSE DROPDOWN
==============================*/

document.addEventListener("click", function (e) {

    if (!e.target.closest(".dropdown")) {

        document.querySelectorAll(".submenu").forEach(function (menu) {
            menu.classList.remove("show");
        });

    }

});

/*==============================
        BACK TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/*==============================
      SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
