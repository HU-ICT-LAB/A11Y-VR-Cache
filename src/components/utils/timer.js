function timer(){
    window.onload = function(){
        FIVE_MINUTES_IN_MILLISECONDS = 300000;
        TEST = 10000;

        console.log("timer..");
        
        setTimeout(function(){
            window.location.href = "gameover.html";
        }, FIVE_MINUTES_IN_MILLISECONDS);
        }
}

timer();