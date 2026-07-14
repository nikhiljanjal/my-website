function openPopup(){
    document.getElementById("popup").style.display = "block";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

window.onclick = function(event){
    const popup = document.getElementById("popup");
    if(event.target == popup){
        popup.style.display = "none";
    }
}
function toggleMenu(){
    document.querySelector(".menu").classList.toggle("active");
}
