const active=document.getElementById('garden-img');

active.addEventListener('click',function(){
    const model=document.querySelector('.model-wrap');
    model.style.display="flex";

})

const closeBtn=document.getElementById('close');
closeBtn.addEventListener('click',function(){
    const model=document.querySelector('.model-wrap');
    model.style.display="none";
});