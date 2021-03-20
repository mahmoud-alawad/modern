// const galleryImage = document.querySelectorAll('.gallery');

// galleryImage.forEach(image =>{
  
//     let plus = document.createElement('div');
 

//     plus.className = 'plus';
 
//     image.appendChild(plus);

//   image.addEventListener('click', ()=>{
//    image.classList.toggle('plus');
  
//   console.log(plus);
//   });
// });
const bars = document.querySelector('.bars');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
bars.addEventListener('click', ()=>{
 menu.classList.add('open-menu');
});

closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu');
    
});