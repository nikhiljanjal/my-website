
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
function sendEnquiry(){

    const name = document.getElementById("fullname").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const district = document.getElementById("district").value.trim();
    const cls = document.getElementById("class").value;
    const stream = document.getElementById("stream").value;

    // Validation
    if (name === "") {
        alert("कृपया पूर्ण नाव भरा! (Please enter Full Name)");
        return;
    }

    if (mobile === "") {
        alert("कृपया मोबाईल नंबर भरा! (Please enter Mobile Number)");
        return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("कृपया वैध 10 अंकी मोबाईल नंबर भरा! (Enter a valid 10-digit mobile number)");
        return;
    }

    if (district === "") {
        alert("कृपया जिल्हा भरा! (Please enter District)");
        return;
    }

    if (cls === "") {
        alert("कृपया वर्ग निवडा! (Please select Class)");
        return;
    }

    if (stream === "") {
        alert("कृपया शाखा निवडा! (Please select Stream)");
        return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("district", district);
    formData.append("class", cls);
    formData.append("stream", stream);

    fetch("https://script.google.com/macros/s/AKfycbzOLzOWZiafvdIPSgD6dQM3pFLUbU7fYwySSMpgFYUtzJrUuc8dtTLk9Egu9U1zscxqzw/exec", {
        method: "POST",
        body: formData
    })
    .then(() => {
        alert("Enquiry Submitted Successfully!");
        document.getElementById("enquiryForm").reset();
    })
    .catch(() => {
        alert("Something went wrong!");
    });
}
