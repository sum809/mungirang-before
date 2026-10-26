const menuButton=document.querySelector ('.menu-button');
const mobileMenu=document.querySelector ('.mobile-menu');
menuButton?.addEventListener('click',()=>{
  const open=mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});

mobileMenu?.querySelectorAll('a').forEach (
  link=>link.addEventListener('click',()=>{
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  })
);

document.querySelectorAll('#booking,.match-form').forEach ( 
  form=>form.addEventListener('submit',event=>{
    event.preventDefault();
    const message=form.id==='booking'?'선택한 조건으로 객실을 확인할게요.'
    :'우리 아이에게 어울리는 객실을 추천할게요.';alert(message);
  })
);

const cards = [...document.querySelectorAll('.room-card') ]; let roomIndex=0;
function showRoom(index){
  roomIndex = (index+cards.length)%cards.length;
  cards.forEach((card,i)=>card.classList.toggle('active',i===roomIndex));
}
document.querySelector('.carousel-arrow.prev')?.addEventListener('click',()=>showRoom(roomIndex-1));
document.querySelector('.carousel-arrow.next')?.addEventListener('click',()=>showRoom(roomIndex+1));
