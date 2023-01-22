function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 43.43464856542449, lng: -27.339630669624995 },
    });

// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-javascript
const flightPlanCoordinates = [
    { lat: 25.253290925785134, lng: 55.36555478073066 },
    { lat: 50.0379603540928, lng: 8.562533606281635 },
    { lat: 45.46604694658018, lng: -73.74507989720708 },
    { lat: 45.32915634620157, lng: -65.89039652882502 },
] ;
const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;
