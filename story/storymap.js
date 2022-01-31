function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
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
        destination: {lat: 53.87289987782688, lng: 10.746035787660583},
        //destination: { lat: 53.873207404769104, lng: 10.746151065673029},
        //Start at Hauptbahnhof - train station, end at Hotel Arnimsruh
        waypoints: [
            {location: {lat: 53.8663742123479, lng: 10.679616632958648}},
            {location: {lat: 53.86586176453497, lng: 10.682245197515524}},
            {location: { lat: 53.8666335971181, lng: 10.685774984709477}},
            {location: { lat: 53.868524126948884, lng: 10.685739812661957}},
            {location: { lat: 53.866277147735865, lng: 10.688176136906055}},
            {location: { lat: 53.869491027582995, lng: 10.6905499912704}},
            {location: { lat: 53.86596260411641, lng: 10.691585472034228}},
            {location: { lat: 53.86595211672861, lng: 10.691594364528683}},
            {location: {lat: 53.88372911045473, lng: 10.720531989914921}},
            {location: {lat: 53.87029370662248, lng: 10.74457243072382}}, 
            //{location: {placeID: "ChIJK1wi6cULskcR5FGEXn38hk8"}},
            {location: {lat: 53.86941928198149, lng: 10.744898619928165}}
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
