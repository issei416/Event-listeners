var btn_click = document.getElementById('click');
var btn_mousein = document.getElementById('mouseenter');
var btn_dblclick = document.getElementById('dblclick');

btn_click.addEventListener('click', () => {
    let countElement = document.querySelector('.badge #click-count');
    let count = countElement.innerText;
    count = parseInt(count)+1;
    countElement.innerText = count;
    console.log('clicks :'+count);
    btn_click.style.backgroundColor = 'rgb('+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+',0.6)';
});

btn_mousein.addEventListener('mouseenter', () => {
    let countElement1 = document.querySelector('.badge #mouse-count');
    let count1 = countElement1.innerText;
    count1 = parseInt(count1)+1;
    countElement1.innerText = count1;
    console.log('mouse enters:'+count1);
    btn_mousein.style.backgroundColor = 'rgb('+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+',0.6)';
});

btn_dblclick.addEventListener('dblclick',() => {
    let countElement2 = document.querySelector('.badge #dblclick-count');
    let count2 = countElement2.innerText;
    count2 = parseInt(count2)+1;
    countElement2.innerText = count2;
    console.log('double clicks:'+count2);
    btn_dblclick.style.backgroundColor = 'rgb('+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+',0.6)';
});

let btn_reset = document.querySelector('#reset');
btn_reset.addEventListener('click' , () => {
    let click_count = document.querySelector('.badge #click-count');
    click_count.innerText = 0; 
    btn_click.style.backgroundColor = 'transparent';
    let mouse_count = document.querySelector('.badge #mouse-count');
    mouse_count.innerText = 0; 
    btn_mousein.style.backgroundColor = 'transparent';
    let db_count = document.querySelector('.badge #dblclick-count');
    db_count.innerText = 0; 
    btn_dblclick.style.backgroundColor = 'transparent'
});




