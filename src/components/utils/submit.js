function submit() {
        sessionStorage.setItem("versie", 1);
        sessionStorage.setItem("keyFound", "false");
        sessionStorage.setItem("doorKeyFound", "false");
    }
   
window.onload = function () {
    document.getElementById('button1').addEventListener('click', submit);
}

