function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 53.8657257, lng: 10.6800565 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
{ lat: 53.8668157, lng: 10.6695952},
{ lat: 53.8657257, lng: 10.6800565 },
{ lat: 53.8660791, lng: 10.685386},
{ lat: 53.8678251, lng: 10.687360},
{ lat: 53.8661445, lng: 10.6886603},
{ lat: 53.8678251, lng: 10.6873601},
{ lat: 53.8658546, lng: 10.6893856},
{ lat: 53.8908232, lng: 10.7137541},
{ lat: 53.8741275, lng: 10.7440585},
  
{ lat: 53.868064, lng: 10.7490757},
{ lat: 53.8741275, lng: 10.7440585}
];
