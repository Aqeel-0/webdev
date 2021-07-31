const btns = document.querySelectorAll('.btn');
const counter = document.querySelector('.counter');
let count = 0;
btns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        const style = this.classList;
        if (style.contains('increase')){
            count ++;
        }
        else if(style.contains('decrease')){
            count --
        }
        else if(style.contains('reset')){
            count = 0
        }
        if (count > 0){
            counter.style.color = 'green';
        }
        else if(count < 0){
            counter.style.color = 'red';
        }
        counter.innerText = count;
    })
})