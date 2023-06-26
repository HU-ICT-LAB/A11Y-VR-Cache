function gameover(){
    window.onload = function(){
        document.getElementById("gameover").play();

        sessionStorage.clear();
    }
}

gameover();