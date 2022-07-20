// ACTIVE LINK background-color
let links = document.querySelectorAll('.nav.flex-column .nav-link');

links.forEach(function(el){
  el.addEventListener('click', function(){
    if(this.id == 'logout'){
      return false;
    }
    links.forEach((e)=>{
      e.classList.remove('active');
    });
    el.classList.add('active');
  });
});

// DIRECTING NAV LINKS
document.querySelector('#tubes-link').addEventListener('click', function(){
  document.querySelector('iframe').setAttribute('src', 'src/tubes.html');
  if(document.body.offsetWidth <= 750){
    document.querySelector('.navbar-toggler').click();
  }
});
document.querySelector('#customers-link').addEventListener('click', function(){
  document.querySelector('iframe').setAttribute('src', 'src/customers.html');
  if(document.body.offsetWidth <= 750){
    document.querySelector('.navbar-toggler').click();
  }
});
