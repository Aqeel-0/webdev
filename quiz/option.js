const No_of_q = document.querySelector('#no-of-q');
const category = document.querySelector('#category');
const difficulty = document.querySelector('#difficulty');
const submit_btn = document.querySelector('.submit-btn');

// variables
let no_of_q;
let catergory_q;
let difficulty_q;
//eventlistner
submit_btn.addEventListener('click', function choices(e){
    e.preventDefault();
    if (No_of_q.value === ''){
        alert('Can not be empty');
        No_of_q.focus();
    }
    else{
        no_of_q = No_of_q.value;
        category_q = category.value;
        difficulty_q = difficulty.value;
        console.log(category_q)
        sessionStorage.setItem('no_of_Q', no_of_q);
        sessionStorage.setItem('category_q', category_q);
        sessionStorage.setItem('difficulty_q', difficulty_q);
        
        window.location.href = 'index.html';
    }
})