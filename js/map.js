function initMap() {
        var uluru = {lat: 44.9526875, lng: -84.81795899999997};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
 }