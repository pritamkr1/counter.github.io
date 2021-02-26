/*var zero = 0;
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

 

 var startValue = 0;
var allBtn = document.querySelectorAll('.btn');
var value = document.querySelector('#counter-value');

allBtn.forEach(function (eachBtn){
    console.log(eachBtn);
    eachBtn.addEventListener('click', function (e){
        console.log(e.currentTarget.classList);
        var style = e.currentTarget.classList;
        if (style.contains('btn-increase')){
            startValue++;
        } else if(style.contains('btn-decrease')){
            startValue--;
        } else{
            startValue = 0
        }
        if(startValue < 0){
            value.style.color = 'red';
        } else if(startValue > 0){
            value.style.color = 'green';
        }else {
            value.style.color = 'black';   
        }

        value.innerHTML = startValue;
    });

});

*/