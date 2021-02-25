var zero = 0;
var count = document.querySelector('.counter');
var resetBtn = document.querySelector('.btn-reset');
var increBtn = document.querySelector('.btn-increase');
var decreBtn = document.querySelector('.btn-decrease');

console.log(zero, count, resetBtn, increBtn, decreBtn);
console.log(++zero);

increBtn.addEventListener('click', increment);
decreBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

function reset(){
    var resetValue = zero;
    count.innerHTML = 0;
}
function increment(){
   console.log('cliked')
    var incrementValue = zero++;
    count.innerHTML = incrementValue;

}
 function decrement(){
    var decrementValue = --zero;
    count.innerHTML = decrementValue;
 }



