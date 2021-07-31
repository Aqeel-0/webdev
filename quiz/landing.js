const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function(e){
    
    if(e.target.classList[1] === 'play'){
        window.location.href = 'options.html';
    }
    else{
        alert("This page is still on progress!!");
    }
});

