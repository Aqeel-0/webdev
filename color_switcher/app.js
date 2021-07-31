const btn = document.querySelector('.change');
const color_name = document.querySelector('.color');
const section = document.querySelector('#main');
const colors = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
btn.addEventListener('click', function(){
    section.style.backgroundColor = get_color();
    color_name.textContent = get_color();
    color_name.style.color = get_color();
});

function get_color(){
    Name = '#'
    for (let i = 0; i<6 ;i++){
        let num = Math.floor(Math.random() * colors.length);
        Name += colors[num];
    }
    return Name
}