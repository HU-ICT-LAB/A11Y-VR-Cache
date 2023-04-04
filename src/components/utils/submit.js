function submit() {
        let height = document.getElementById("height").value;
        let width = document.getElementById("width").value;


        let data = {
            height: height,
            width: width
        }
        sessionStorage.setItem("settings", JSON.stringify(data));
    }
   
window.onload = function () {
    document.getElementById('button1').addEventListener('click', submit);
}

