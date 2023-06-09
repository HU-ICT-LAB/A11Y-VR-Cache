function submit() {
        sessionStorage.setItem("versie", 1);
        sessionStorage.setItem("keyFound", "false");
    }
   
window.onload = function () {
    document.getElementById('button1').addEventListener('click', submit);
}

