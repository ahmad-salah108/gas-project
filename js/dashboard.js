/* Feather */
feather.replace({ "aria-hidden": "true" });

// START ACTIVE LINK
let links = document.querySelectorAll('.nav.flex-column .nav-link');

links.forEach(function(el){
  el.addEventListener('click', function(){
    links.forEach((e)=>{
      e.classList.remove('active');
    });
    el.classList.add('active');
  });
});
// END ACTIVE LINK
