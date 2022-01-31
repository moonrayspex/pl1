  //making variables for intitializing DirectionsService and DirecitonsRenderer: https://developers.google.com/maps/documentation/javascript/directions
function initMap() 
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var HBH = new google.maps.LatLng(53.86729370705401, 10.6704796398457);
    var Arnimsruh = new google.maps.LatLng(53.873207404769104, 10.746151065673029);
    var mapOptions = {
      zoom: 12,
      center: HBH
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
  }

  
//Calculate Route
function calcRoute() {
  var selectedMode = document.getElementById('mode').value;
  var request = {
      origin: HBH,
      destination: Arnimsruh,
      waypoints: [
        {location: {placeID: "ChIJrS2izlYJskcRCN7u5pIYUOo"}},
        {location: {placeID: "ChIJQZcWNFcJskcRDuo5SSNFoLw"}},
        {location: { lat: 53.8666335971181, lng: 10.685774984709477}},
        {location: { lat: 53.868524126948884, lng: 10.685739812661957}},
        {location: { lat: 53.866277147735865, lng: 10.688176136906055}},
        {location: { lat: 53.869491027582995, lng: 10.6905499912704}},
        {location: { lat: 53.86596260411641, lng: 10.691585472034228}},
        {location: { lat: 53.86595211672861, lng: 10.691594364528683}},
        {location: {lat: 53.89624449801269, lng: 10.71131512688614}},
        {location: {lat: 53.87029370662248, lng: 10.74457243072382}},
        {location: {lat: 53.873017004571835, lng: 10.745883695830639}},
                  ],
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
    }
  });
}


