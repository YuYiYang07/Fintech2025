const items = document.querySelectorAll('.item');
let current = 0;
let timer = null;
let speed = 100;
let count = 0;
let resultIndex = Math.floor(Math.random() * items.length); // 最终奖品位置

function highlight(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}

function roll() {
  highlight(current % items.length);
  current++;
  count++;

  // 模拟减速
  if (count > 30 && current % items.length === resultIndex) {
    clearInterval(timer);
    alert(`恭喜你抽到了 ${items[resultIndex].innerText}`);
  } else {
    speed += 10; // 慢慢变慢
    clearTimeout(timer);
    timer = setTimeout(roll, speed);
  }
}

document.getElementById('startBtn').addEventListener('click', () => {
  speed = 100;
  count = 0;
  resultIndex = Math.floor(Math.random() * items.length); // 每次重新计算
  roll();
});
