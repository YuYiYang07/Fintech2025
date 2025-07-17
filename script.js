const items = document.querySelectorAll('.item');
let current = 0;
let timer = null;
let speed = 100;
let totalSteps = 0;
let stepsLeft = 0;
let resultIndex = 0;
let finalIndex = 0;

const cashbackMap = {
  2: "10%",
  3: "99%",
  0: "199%",
  1: "1%"
};

function highlight(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
  finalIndex = index;
}

function roll() {
  highlight(current % items.length);
  current++;
  stepsLeft--;

  if (stepsLeft <= 0) {
    clearTimeout(timer);
    alert(`Congratulations! You got a cashback of ${cashbackMap[finalIndex]}`);
  } else {
    speed += 15;
    clearTimeout(timer);
    timer = setTimeout(roll, speed);
  }
}

document.getElementById('startBtn').addEventListener('click', () => {
  speed = 100;
  current = 0;

  resultIndex = Math.floor(Math.random() * items.length);

  const baseRounds = 5;
  totalSteps = baseRounds * items.length + resultIndex;
  stepsLeft = totalSteps;

  roll();
});
