let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');
let mSecondsOutput = document.querySelector('.mSeconds');
let secondsOutput = document.querySelector('.seconds');
let minsOutput = document.querySelector('.mins');
let hoursOutput = document.querySelector('.hours');


let watchRunning = false;

let hours = 0;
let mins = 0;
let seconds = 0;
let mSeconds = 0;

startBtn.addEventListener('click', () => {
    watchRunning = true;
  
        setInterval(() => {
            if(watchRunning) {
                
                if(mSeconds >= 1000) {
                    seconds++;
                    mSeconds = 0;
                secondsOutput.textContent = seconds;
                    
                }
                if(seconds === 60) {
                    mins++;
                    seconds = 0;
                    minsOutput.textContent = mins;
                    
                }
                if(mins === 60) {
                    hours++;
                    mins = 0;
                    hoursOutput.textContent = hours;
                }


            mSeconds += 2;
            mSecondsOutput.textContent = mSeconds;
        }

        },0)

})
stopBtn.addEventListener('click', () => {
    watchRunning = false;
})

resetBtn.addEventListener('click', () => {
    watchRunning = false;
 hours = 0;
 mins = 0;
 seconds = 0;
 mSeconds = 0;
 hoursOutput = 0;

 hoursOutput.textContent = hours;
 minsOutput.textContent = mins;
 secondsOutput.textContent = seconds;
mSecondsOutput.textContent = mSeconds;

})