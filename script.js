
document.querySelector('.herosection__btn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({behavior:'smooth'});
});

const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 5 * 4;
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < trigger) sec.classList.add('section--show');
  });
});