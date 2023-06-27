function timer(){
    window.onload = function(){
        TEN_MINUTES_IN_MILLISECONDS = 600000;
        NINE_MINUTES_IN_MILLISECONDS = 540000
        FIVE_MINUTES_IN_MILLISECONDS = 300000;
        FIVE_SECONDS_COUNTDOWN =  TEN_MINUTES_IN_MILLISECONDS - 5000;
        TEST = 10000;

        console.log("timer..");

        setTimeout(function(){
            window.location.href = "gameover.html";
        }, TEST);

        setTimeout(function(){
            document.getElementById("vijfMinuten").play();
        }, FIVE_MINUTES_IN_MILLISECONDS);

        setTimeout(function(){
            document.getElementById("eenMinuut").play();
        }, NINE_MINUTES_IN_MILLISECONDS);        
        
        setTimeout(function(){
            document.getElementById("countdown").play();
        }, FIVE_SECONDS_COUNTDOWN);

        }
}

timer();