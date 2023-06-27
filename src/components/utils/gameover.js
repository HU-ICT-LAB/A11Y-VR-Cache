function gameover(){
    window.onload = function(){
        document.getElementById("gameover").play();

        document.getElementById("gameover2").play();

        sessionStorage.clear();
    }
}

gameover();