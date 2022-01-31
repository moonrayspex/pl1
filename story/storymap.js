function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 53.86774473151245, lng: 10.68957380066593 },
    });
  
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
  }
  
  
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = document.getElementById("mode").value;
  
    directionsService
      .route({
        origin: { lat: 53.86729370705401, lng: 10.6704796398457 },
        destination: { lat: 53.873207404769104, lng: 10.746151065673029},
        //Start at Hauptbahnhof - train station, end at Hotel Arnimsruh
        waypoints: [
            //{location: {placeID: "ChIJrS2izlYJskcRCN7u5pIYUOo"}},
            //{location: {placeID: "ChIJQZcWNFcJskcRDuo5SSNFoLw"}},
            {location: { lat: 53.8666335971181, lng: 10.685774984709477}},
            {location: { lat: 53.868524126948884, lng: 10.685739812661957}},
            {location: { lat: 53.866277147735865, lng: 10.688176136906055}},
            {location: { lat: 53.869491027582995, lng: 10.6905499912704}},
            {location: { lat: 53.86596260411641, lng: 10.691585472034228}},
            {location: { lat: 53.86595211672861, lng: 10.691594364528683}},
            {location: {lat: 53.89624449801269, lng: 10.71131512688614}},
            {location: {lat: 53.87029370662248, lng: 10.74457243072382}},
            {location: {lat: 53.873017004571835, lng: 10.745883695830639}}
                      ],
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode],
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }
