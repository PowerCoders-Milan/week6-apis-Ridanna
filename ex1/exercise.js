var map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.30, lng: 11.21 },
        zoom: 8
    });
    new google.maps.Marker({
        position: {lat: 46.30, lng: 11.21 },
        map: map
      });  
}

