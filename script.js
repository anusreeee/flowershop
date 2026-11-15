const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));menuButton.textContent=opened?'×':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
document.querySelectorAll('.add-btn').forEach(button=>button.addEventListener('click',()=>{const product=button.dataset.product;const message=document.querySelector('#message');message.value=(message.value?message.value+'\n':'')+'I am interested in '+product+'.';document.querySelector('#contact').scrollIntoView({behavior:'smooth'});message.focus();}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#enquiry-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const subject=encodeURIComponent('Flower enquiry - '+data.get('name'));const body=encodeURIComponent('Name: '+data.get('name')+'\nContact: '+data.get('email')+'\nEnquiry: '+data.get('message'));document.querySelector('#form-note').textContent='Opening your email app…';window.location.href='mailto:hello@bloomandbliss.example?subject='+subject+'&body='+body;});
