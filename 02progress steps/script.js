const progress = document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circle=document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click',()=>{
    currentActive++;
    update();
});

prev.addEventListener('click', ()=>{
    currentActive--;
    update();
});

function update() {
    circle.forEach((item, index)=>{
        if(index<currentActive){
            item.classList.add('active');
        } else{
            item.classList.remove('active');
        }
    })
    progress.style.width=(currentActive-1)/(circle.length-1)*100+'%';
    if(currentActive==1  ){
        prev.disabled =true;
    } else if(currentActive==circle.length){
        next.disabled = true;
    } else{
        prev.disabled =false;
        next.disabled = false;
    }
}
