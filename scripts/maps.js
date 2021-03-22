  
  /*google maps */
  function initMap() {
    //    location option
       let options = {
           zoom: 4,
           center: {lat:45.43713, lng:-12.33265}
       }
        
    //    set new map
       let map = new google.maps.Map(document.getElementById('map'), options);

       //add marker
       let marker = new google.maps.Marker({
        
        position: {lat:45.47152,lng:12.24017},
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

       });

       let infowWindow = new google.maps.InfowWindow({
           content: '<h1>We Are Here</h1>'
       });

       marker.addEventListner('click',()=>{
          infowWindow.Open(map, marker);
          console.log('ok');
       });
   }