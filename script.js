const buttonModal=document.querySelectorAll('.show-modal');
const modal=document.querySelectorAll('.modal');
const overlay=document.querySelector('.overlay');
for(let i=0;i<buttonModal.length;i++)
{
    buttonModal[i].addEventListener('click',function(){
         modal[i].classList.remove(`hidden${i}`);
        overlay.classList.remove(`hidden`);
    })
};

const buttoncloseModal=document.querySelectorAll('.close-modal');
for(let i=0;i<buttoncloseModal.length;i++)
{
    buttoncloseModal[i].addEventListener('click',function(){
        modal[i].classList.add(`hidden${i}`);
        overlay.classList.add(`hidden`);
    })
}

 overlay.addEventListener('click',function(){
        for(let i=0;i<buttoncloseModal.length;i++)
        { 
            if(!modal[i].classList.contains(`hidden${i}`))
           {modal[i].classList.add(`hidden${i}`);
            overlay.classList.add(`hidden`);
            break;}
        }
 })
 
document.addEventListener('keydown',function(e){
for(let i=0;i<modal.length;i++)
{
    if(e.key==='Escape'&& !modal[i].classList.contains(`hidden${i}`))
    {
        modal[i].classList.add(`hidden${i}`);
        overlay.classList.add(`hidden`);
        break;
    }
}
});