
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

//animation
    window.addEventListener('scroll', function scrollTitle() {
       let windowHight = window.pageYOffset;
       let storiesHight = storiesContainer.offsetHeight; //1212

       if(windowHight + 360 >= storiesHight){
        storiesTitle.classList.add('scale-background');
        cardPhoto.style.minHeight = '40vh';
    
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
        let pluse = document.createElement('i');
        pluse.className = 'fas fa-pluse';
        popUp.className = 'popup-gallery';
        console.log(popUp);
        

        popUp.appendChild(pluse);
        // image.appendChild(popUp);
        image.classList.toggle('popUp');
        console.log(popUp);
    });
    });

// Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
// script.async = true;

// // Attach your callback function to the `window` object
// window.initMap = function() {
//   // JS API is loaded and available
    
// };

// // Append the 'script' element to 'head'
// document.body.appendChild(script);

// 