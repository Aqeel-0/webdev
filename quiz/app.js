// selector
const question_text = document.querySelector('.question-text');
const question_no = document.querySelector('.question-prefix');
const choices = document.querySelectorAll('.choice-text');
const progress_bar = document.querySelector('.progress-bar');
const score_text = document.querySelector('.score-text');
const q_n = document.querySelector('.q-n');
let currentQuestion = 0;
let questionNumber = 0;
let score = 0;
let score_bonus = 10;
let question_array;

let  N = sessionStorage.getItem('no_of_Q');
let difficulty = sessionStorage.getItem('difficulty_q')
let category = sessionStorage.getItem('category_q')
difficulty = difficulty === 'Random' ? "" : difficulty = difficulty
category = category === 'Random' ? "" : category = category
const api = `https://quizapi.io/api/v1/questions?apiKey=0HQjM281YDoow5YQRvmzgSCVc9YebjTazFsUHRti&category=${category}&difficulty=${difficulty}&limit=${N}`
async function getapi(){
    const api_data = await fetch(api)
    const data = await api_data.json()
    question_array = data
    getquestion(question_array)
}

function getquestion(data){
    q_n.innerText = `${questionNumber+1}/${N}`;
    progress_bar.style.width = `${(questionNumber/N)*100}%`;
    score_text.innerText = `Current Score - ${score}`; 
    if(questionNumber<N){
        let question = data[questionNumber];
        question_text.innerText = question.question;
        choices.forEach(choice =>{
            choice_number = choice.dataset['number'];
            choice.innerText = question.answers[choice_number];
        })
    }
    else{
        window.location.href = "";
    }
}

choices.forEach(choice =>{
    choice.addEventListener('click', e=>{
        let correct_option = question_array[questionNumber].correct_answer;
        let user_option = e.target.dataset['number'];
        let parentE = e.target;
        if (user_option === correct_option){
            parentE.classList.add('correct');
            score += score_bonus;
            setTimeout(function(){
                parentE.classList.remove('correct');
                questionNumber++;
                getquestion(question_array);
            }, 1000);
        }
        else{
            parentE.classList.add('incorrect');
            setTimeout(function(){
                parentE.classList.remove('incorrect');
                questionNumber++;
                getquestion(question_array);
            }, 1000);
        }
         
    })
})


getapi()