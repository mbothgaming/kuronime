const langToggle=document.getElementById('langToggle');
let language='id';
langToggle.addEventListener('click',()=>{
  language=language==='id'?'en':'id';
  document.documentElement.lang=language;
  document.querySelectorAll('[data-id][data-en]').forEach(el=>{el.innerHTML=el.dataset[language]});
  langToggle.innerHTML=language==='id'?'ID <span>/</span> EN':'EN <span>/</span> ID';
});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const filter=button.dataset.filter;
  document.querySelectorAll('.anime-card').forEach(card=>{
    card.style.display=(filter==='all'||card.dataset.genre.split(' ').includes(filter))?'':'none';
  });
}));
const modal=document.getElementById('searchModal');
document.getElementById('searchOpen').addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.getElementById('siteSearch').focus()});
document.getElementById('searchClose').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
document.getElementById('menuToggle').addEventListener('click',()=>{
  let nav=document.querySelector('.mobile-nav');
  if(!nav){nav=document.createElement('nav');nav.className='mobile-nav';nav.innerHTML='<a href="#home">Beranda</a><a href="#catalog">Anime</a><a href="#discover">Discover</a><a href="#editorial">Editorial</a><a href="#about">Tentang</a>';document.querySelector('.site-header').appendChild(nav)}
  nav.classList.toggle('show');
});
document.getElementById('newsletterForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formMessage').textContent='Terima kasih! Form ini masih demo dan belum menyimpan alamat email.';
});
