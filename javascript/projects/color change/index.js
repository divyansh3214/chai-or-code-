const buttons=document.querySelectorAll('.button');
const background=document.querySelector('body');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
       background.style.backgroundColor=button.id
    })
});