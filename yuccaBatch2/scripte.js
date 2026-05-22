const locomotiveScroll = new LocomotiveScroll();

const box = document.querySelector('.abc');
const menu = document.querySelector('.bug');

box.addEventListener('click', (e) => {
  e.preventDefault();

    menu.classList.toggle('active');
});

const abc= "1234"
console.log(Number(abc));
