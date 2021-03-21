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
const header = document.querySelector('.header');
const buttonOn = document.querySelector('.on');
const buttonOff = document.querySelector('.off');
const spinner = document.querySelector('.spinner');
const icons = document.querySelectorAll('.icon');
const servicesPath = document.querySelectorAll('.icon-services');
const imagesGallery = document.querySelectorAll('.image-gallery');
const storiesContainer = document.querySelector('.stories');
const storiesTitle = document.querySelector('.stories .title');
const cardPhoto = document.querySelector('.stories .left');


let menuItems  = document.querySelectorAll('.links');
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];


window.addEventListener('load', function removeSpinner() {
   setTimeout(()=>{
    spinner.parentElement.remove();
   },1500);
});


//show up menu
bars.addEventListener('click', ()=>{
 menu.classList.add('open-menu');
});

closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu');
  
    
});
//scrolling into sections
menuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
       
        let link = document.getElementById(item.getAttribute('data-link'));
        
        link.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
    });
    backgroundInterval = setInterval(()=>{
    let randomNum = Math.floor(Math.random() * imgsArray.length);

    header.style.backgroundImage = 'url("images/'+imgsArray[randomNum]+'")';
    // console.log(header);
    }, 5000);


    window.addEventListener('scroll', function scrollTitle() {
       let windowHight = window.pageYOffset;
       let storiesHight = storiesContainer.offsetHeight; //1212

       if(windowHight + 300 >= storiesHight){
        storiesTitle.classList.add('scale-background');
        cardPhoto.style.minHeight = '40vh';
    
        console.log(cardPhoto.classList);
       }
       
    });
    // icons.forEach((icon)=>{
    //  icon.addEventListener('onmouseover', ()=>{
    //   servicesPath.forEach((servies)=>{
    //   servies.style.fill = '#fff';
     
    //   });
    //  });
    // });

    imagesGallery.forEach((image)=>{
    image.addEventListener('click', function openPopup() {
        let popUp = document.createElement('div');
        popUp.className = 'popup-gallery';
        
        image.appendChild(popUp);
        console.log(popUp);
    });
    });