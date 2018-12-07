
import '../css/main.scss';

console.log('mealDb')

var mainContainer = document.querySelector('.main');
var heroImag = document.querySelector('.hero-image');
var textInput = document.querySelector('.text-Input');
var form = document.getElementById('form');
var categoryImage = document.querySelector('.cat-image');
var favDiv = document.querySelector('.counter');
var headerText = document.querySelector('.head-text')
console.log(headerText);

var url  = 'https://www.themealdb.com/api/json/v1/1/categories.php';
function mainPage(){
	favDiv.style.display = "none";

	fetch(url).then(d => d.json()).then(data => {
	data.categories.forEach((v, i) => {
		let cat = v.strCategory;
		let des = v.strCategoryDescription;
		let thumb = v.strCategoryThumb;
		var headDiv = document.createElement('div');
		heroImag.appendChild(headDiv);
		var img = document.createElement('img');
		img.setAttribute('src', `${thumb}`)
		headDiv.appendChild(img);
		var para = document.createElement('h1')
		para.textContent = `${cat}`
		headDiv.appendChild(para);

	})
})
}

mainPage();


form.addEventListener("submit", function(e) {
	e.preventDefault();
	var query = document.querySelector('.text-Input').value;
	console.log(query)
	var caturl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
	fetch(caturl)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		data.meals.forEach((v ,i) => {
		let strcat = v.strMeal;
		let insta = v.strInstructions;
		let strthumb = v.strMealThumb;
		let instruction = v.strInstructions;
		let strvideo = v.strYoutube;

		// favDiv.style.display = "block";
		textInput.style.display = "none"
		heroImag.style.display = 'none';
		var catDiv = document.createElement('div')
		catDiv.className = "catDiv"
		categoryImage.appendChild(catDiv);
		var catImg = document.createElement('img');
		catImg.setAttribute('src', `${strthumb}`)
		catDiv.appendChild(catImg);
		var heading = document.createElement('h1');
		heading.innerText = `${strcat}`;
		catDiv.prepend(heading);
		var ingredient = document.createElement('p')
		ingredient.innerText = `${instruction}`
		catDiv.appendChild(ingredient);
		// var video = document.createElement('a');
		// video.setAttribute('href', `${strvideo}`);
		// video.innerText = ` YouTube Link:- ${strvideo}`;
		// catDiv.appendChild(video);
		var button = document.createElement('button');
		button.id = "favbtn";
		button.innerText = "Add To Fav";
		catDiv.appendChild(button);
		textInput.setAttribute('placeholder', "Serch for Food")
		});
		// textInput.value = " ";
	})
		
})


		var favorites = [];
		var counter = 0;

	function addFav(e) {
		e.preventDefault();
		favDiv.style.display = "block";
		++counter;
		console.log(counter)
		favorites.push(e.target.parentElement);	
		var favBtn = document.getElementById('favbtn');
		favDiv.innerHTML = 	`<i class="fas fa-cart-plus"></i>${counter}`;
		console.log(favBtn);
		console.log(favorites)
				query.innerText = "";

	}

	function displayFav(){
		categoryImage.innerHTML = "";
		favorites.forEach((v, i ) => {
			categoryImage.appendChild(v);
		var delBtn = document.createElement('button')
		delBtn.innerText = "Delete";
		});
	}



favDiv.addEventListener('click', displayFav)
categoryImage.addEventListener('click', addFav);
headerText.addEventListener('click', function(e) {
	console.log(e);
	heroImag.style.display = 'inline-block';
	textInput.style.display = "inline-block"
  favDiv.style.display = "none";
	heroImag.style.display = 'grid';
	categoryImage.innerHTML = " ";
})


/*function trigger()

	{

	textInput.addEventListener("click", popup);

	function popup()

	{

	// <h1>Please Enter Food Name for Search<h1>

	alert("Welcome to my WebPage !!! Search for food");

	}

	}

window.onload = trigger;*/


