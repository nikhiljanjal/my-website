document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    alert("Admission Portal will be available soon!");
  });
});
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
