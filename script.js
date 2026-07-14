/*==============================
        POPUP
==============================*/

function openPopup(){

    document.getElementById("popup").style.display = "block";

}


function closePopup(){

    document.getElementById("popup").style.display = "none";

}


window.onclick = function(event){

    const popup = document.getElementById("popup");

    if(event.target === popup){

        popup.style.display = "none";

    }

};



/*==============================
        MOBILE MENU
==============================*/

function toggleMenu(){

    document.querySelector(".menu").classList.toggle("active");

}



/*==============================
        BACK TO TOP
==============================*/

let topBtn = document.getElementById("topBtn");


window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

};



topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        let target = document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});
