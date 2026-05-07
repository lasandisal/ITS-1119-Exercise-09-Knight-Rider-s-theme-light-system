const container = document.getElementById('light-bar');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

const totalBulbs = 7;
let currentIndex = 0;
let direction = 1;
let intervalId = null;

for (let i = 0; i < totalBulbs; i++) {
    const bulb = document.createElement('div');
    bulb.classList.add('bulb');
    container.appendChild(bulb);
}

const bulbs = document.querySelectorAll('.bulb');


function animate() {
    bulbs.forEach((bulb, index) => {
        bulb.style.backgroundColor = 'white';
        bulb.style.boxShadow = 'none';
        bulb.style.opacity = '0.9';

        if (index === currentIndex) {
            bulb.style.backgroundColor = 'red';
            bulb.style.opacity = '1';
            bulb.style.boxShadow = '0 0 10px 5px red';
        } 
        else if (index === currentIndex - 1 || index === currentIndex + 1) {
            bulb.style.backgroundColor = '#ffbaba';
        }
    });

    currentIndex += direction;

    if (currentIndex === totalBulbs - 1 || currentIndex === 0) {
        direction *= -1;
    }
}

function startScanner() {
    if (!intervalId) {
        intervalId = setInterval(animate, 100);
    }
}

function stopScanner() {
    clearInterval(intervalId);
    intervalId = null;
}

startBtn.addEventListener('click', startScanner);
stopBtn.addEventListener('click', stopScanner);

startScanner();