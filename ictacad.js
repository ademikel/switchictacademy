var navbar = document.querySelector(".navbar");
window.onscroll = function() {scroll()};
function scroll() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky"); 
    }
}
window.sr=ScrollReveal();
sr.reveal('.title', {
  origin:'top',
  duration: 2000,
  distance: '50px',
  delay:300,
});
sr.reveal('.mybtn', {
  origin:'bottom',
  duration: 1000,
  distance: '100px',
  delay:500,
})
