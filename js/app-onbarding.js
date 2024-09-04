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

{
    const slider=document.querySelector("#slider");
    const items=document.querySelectorAll("li");
    const nextBtn=document.querySelector("#next");
    const prevBtn=document.querySelector("#prev");

    let index=0;

    nextBtn.onclick=function(event){
        let next;
        if(index<items.length-1){
            next=index+1;
        }
        else{
            next=0;
        }
        items[index].style.display="none";
        items[next].style.display="block"
        index=next;
    }

    prevBtn.onclick=function(event){
        let prev;
        if(index>=items.length-14){
            prev=index-1;
        }
        else{
            prev=14;
        }
        items[index].style.display="none";
        items[prev].style.display="block"
        index=prev;
    }

}