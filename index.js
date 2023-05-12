
let elements = {
    page: document.querySelector("body").style.backgroundColor = "rgb(17, 54, 3)",
    min: document.querySelector("#minutes"),
    sec: document.querySelector("#seconds"),
    work: document.querySelector("#workSession").
        addEventListener("click", () => {
            timer.stop();
            document.querySelector('#start').innerHTML=`Start`;
            timer.time = 45 * 60;
            elements.min.innerHTML = "45";
            elements.sec.innerHTML = "00";
            document.querySelector("body").style.backgroundColor = "rgb(17, 54, 3)"
        }
        ),
    long: document.querySelector("#longBreakSession").
        addEventListener("click", () => {
            timer.stop();
            document.querySelector('#start').innerHTML=`Start`;
            elements.min.innerHTML = "15";
            elements.sec.innerHTML = "00";
            timer.time = 15 * 60;
            document.querySelector("body").style.backgroundColor = "#3f6c51";
        }),
    short: document.querySelector("#shortBreakSession").
        addEventListener("click", () => {
            timer.stop();
            document.querySelector('#start').innerHTML=`Start`;
            timer.time = 5 * 60;
            elements.min.innerHTML = "05";
            elements.sec.innerHTML = "00";
            document.querySelector("body").style.backgroundColor = "#498467"
        }),
    start: document.querySelector("#start").
        addEventListener("click", () => { 
            if(timer.interval===null){
            timer.start();
            document.querySelector('#start').innerHTML=`Pause`
            }
            else {
                timer.stop();
                document.querySelector('#start').innerHTML=`Start`
            }
        }),

}

let timer = {
    time: 2700,
    interval: null,
    start: function () {
        this.interval = setInterval(() => {
            if (this.time !== 0) {
                this.time--;
            }
            convertFromSeconds();
            
        }, 1000)
    },
    stop: function () {
        clearInterval(this.interval);
        this.interval = null;
    }
}

function convertFromSeconds() {
    const minutes = Math.floor(timer.time / 60);
    const seconds = timer.time % 60;
    elements.min.textContent = minutes.toString().padStart(2, 0);
    elements.sec.textContent = seconds.toString().padStart(2, 0);
}
