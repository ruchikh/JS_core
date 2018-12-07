

import '../css/main.scss';

console.log("Geolocation");


var submitbtn = document.querySelector('.submit-btn');
var btnDiv = document.querySelector('.btn-div')

var map;
function initMap(){
	map = new google.maps.Map(document.querySelector('.map'), {
		center: {lat: -34.397, lng: 150.644},
    zoom: 8
	});

	var marker = new google.maps.Marker({position:{lat: -34.397, lng: 150.644}, map:map});
}


function displayMap() {
	navigator.geolocation.getCurrentPosition((position) => {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var mapDiv = document.createElement('div')
	mapDiv.innerHTML = `<div>Your Lat ${lat.toFixed(2)} and lng ${lng.toFixed(2)}</div>`;
	btnDiv.appendChild(mapDiv);
	map = new google.maps.Map(document.querySelector('.map'), {
		center: {lat: lat, lng: lng},
    zoom: 8
	});
	});
}


submitbtn.addEventListener('click', displayMap)
