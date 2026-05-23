window.addEventListener('scroll',()=>{
  const nav=document.querySelector('nav');

  if(window.scrollY>50){
    nav.style.boxShadow='0 0 20px rgba(212,175,55,0.3)';
  }else{
    nav.style.boxShadow='none';
  }
});

const form=document.getElementById('contactForm');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  alert('Message Sent Successfully!');
  form.reset();
});
