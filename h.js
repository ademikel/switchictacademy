window.sr=ScrollReveal();
sr.reveal('.btt', {
  origin:'right',
  duration: 1000,
  distance: '50px',
  delay:300,
});
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 100,
  wrap: false
})