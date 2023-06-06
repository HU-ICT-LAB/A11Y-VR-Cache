function submit() {
        sessionStorage.setItem("versie", 1);
    }
   
window.onload = function () {
    document.getElementById('button1').addEventListener('click', submit);
}

