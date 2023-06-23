function timer(){
    window.onload = function(){
        TEN_MINUTES_IN_MILLISECONDS = 600000;
        TEST = 10000;

        console.log("timer..");
        
        setTimeout(function(){
            window.location.href = "gameover.html";
        }, TEN_MINUTES_IN_MILLISECONDS);
        }
}

timer();