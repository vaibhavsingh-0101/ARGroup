const boxes = document.querySelectorAll('.box');
const imgs = document.querySelectorAll('.img_overlay img');
const header = document.querySelector('header');
const acherShop= document.querySelector('.shop_anchar')
const acherbox= document.querySelector('.shop_nav_header')

window.addEventListener('scroll', () => {

  // Change background
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'white';
  } else {
    header.style.backgroundColor = 'transparent';
  }

  // Hide header
  if (window.scrollY > 300) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

});

acherShop.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    acherbox.style.top='0vh'
});
acherbox.addEventListener('mouseleave',(e)=>{
    e.preventDefault();
    acherbox.style.top='-50vh'
});

boxes[0].classList.add('active');
imgs[0].classList.add('active');

boxes.forEach((box, i) => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(b => b.classList.remove('active'));
        imgs.forEach(img => img.classList.remove('active'));

        box.classList.add('active');
        imgs[i].classList.add('active');
    });
});




// document.querySelector('.img_overlay').addEventListener('mouseleave', () => {
//     // On leave, go back to first box instead of clearing all
//     boxes.forEach(b => b.classList.remove('active'));
//     imgs.forEach(img => img.classList.remove('active'));

//     boxes[0].classList.add('active');
//     imgs[0].classList.add('active');
// });