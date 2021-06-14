// B1

const btn1 = document.getElementById("btn1");
const id1 = document.getElementById("id1");
btn1.onclick = function(){
    if (id1.style.display === 'none') {
        id1.style.display = 'block';
    } else {
        id1.style.display = 'none';
    }
}
// B2

const btn2 = document.getElementById("btn2");
const id2 = document.getElementById("id2");
const colors = [
    '#00aefd',
    '#ffa400',
    '#07a787',
    '#ff7870',
    'black',
    'pink',
    'yellow',
    '#e74c3c',
    '#2979ff',
  ];
const buttonRandom = document.querySelector('id2');
btn2.onclick = function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    id2.style.backgroundColor = randomColor
  }

// B3
const btn3 = document.getElementById('btn3');
const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');
btn3.onclick = function(){
    const i = block1.innerHTML;
    block1.innerHTML = block2.innerHTML;
    block2.innerHTML = i;
}
//B4
const btn4 = document.getElementById('btn4');
const id4 = document.getElementById('id4');
let a = 14;
btn4.onclick = function(){
    a = a+1;
    id4.style.fontSize = a+'px';
}
