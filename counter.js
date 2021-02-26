var startValue = 0;
var value = document.querySelector('#counter-value');
var allBtn = document.querySelectorAll('.btn');

allBtn.forEach(function (eachBtn){
    console.log(eachBtn);
    eachBtn.addEventListener('click', function(event){
       console.log(event.currentTarget.classList) ;
        var style = event.currentTarget.classList;

        if (style.contains('btn-increase')){
            startValue++;
        } else if(style.contains('btn-decrease')){
            startValue--;
        }else{
            startValue = 0;
        }
        value.textContent = startValue;

        if(startValue > 0){
            value.style.color = 'green';
        }else if(startValue < 0){
            value.style.color = 'red';
        }else{
            value.style.color = 'black';
        }
    });
});