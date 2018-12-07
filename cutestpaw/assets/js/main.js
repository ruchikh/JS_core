
import '../css/main.scss'

console.log('cat Picture');

var cat;
var catdata = fetch('https://api.thecatapi.com/v1/images/search', {method: "GET",
	header: {"Content-Type": "application/json"},
'x-api-key': "932f4cf6-1059-4b3e-b841-48fc4c55fd36"}).then(d => d.json()).then(data1 => cat = data1);



var catCategory;

fetch('https://api.thecatapi.com/v1/categories', {mathod:"GET",
	header: {"Content-Type": "application/json"}}).then(d => d.json()).then(category => {catCategory = category});


var catImage;

var mainContaine = document.querySelector('.main-container')
var imageBar = document.querySelector(".image")
var header = document.querySelector('.header')

function displayCat(){
	console.log('MyCaaattt')

	// imgCat.setAttribute('src', "https://26.media.tumblr.com/tumblr_lxwc47ZdnA1qzo2pmo1_500.jpg")
	// catDiv.appendChild(imgCat);
	// catDiv.innerHTML = `<img src="${cat[0].url}"/>`;
}


var mainContainer = document.querySelector('.main-container')
function displayImage(){
	var url = `https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg,png,gif&format=json&order=RANDOM&page=0&limit=10&category_ids&breed_ids`;
	fetch(url).then(c => c.json()).then(resp => {
		resp.forEach((v, i ) => {
			console.log(v.url);
			var catDiv = document.createElement('div')
			mainContaine.appendChild(catDiv);
			var imgCat = document.createElement('img');
			imgCat.setAttribute('src', `${v.url}`);
			catDiv.appendChild(imgCat);
		})
	}
	// mainContainer.style.backgroundImage = `url(${resp.url})`;
	);


}


imageBar.addEventListener('click', displayImage);

