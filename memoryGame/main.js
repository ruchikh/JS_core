const mainContainer = document.querySelector('.main-container');
const box = document.querySelectorAll('.box');
const countMatch = document.querySelector('.contain')
const header = document.querySelector('h1')
const boxData = [];
const mainContainerData = []


const iconBoxes =[
	  `<div class="box"><i class="fab fa-500px icon"></i></div>`,
      `<div class="box"><i class="fas fa-bomb icon"></i></div>`,
      `<div class="box"><i class="fas fa-cannabis icon"></i></div>`,
      `<div class="box"><i class="fab fa-android icon"></i></div>`,
      `<div class="box"><i class="fab fa-earlybirds icon"></i></div>`,
      `<div class="box"><i class="fas fa-cannabis icon"></i></div>`,
      `<div class="box"><i class="fas fa-headphones icon"></i></div>`,
      `<div class="box"><i class="fab fa-500px icon"></i></div>`,
      `<div class="box"><i class="fab fa-earlybirds icon"></i></div>`,
      `<div class="box"><i class="fas fa-bomb icon"></i></div>`,
      `<div class="box"><i class="fas fa-kiss-wink-heart icon"></i></div>`,
      `<div class="box"><i class="fab fa-android icon"></i></div>`,
      `<div class="box"><i class="fas fa-chess-king icon"></i></div>`,
      `<div class="box"><i class="fas fa-kiss-wink-heart icon"></i></div>`,
      `<div class="box"><i class="fas fa-chess-king icon"></i></div>`,
      `<div class="box"><i class="fas fa-headphones icon"></i></div>`
];

var count = 0;
mainContainer.innerHTML = iconBoxes.sort(e => 0.5 - Math.random()).join('');


function displayImage(event){
	const target = event.target;
	const targetIcon = event.target.childNodes[0].classList.value;
	target.classList.add('unhide')
	mainContainerData.push(target)
	boxData.push(targetIcon)
	count = count + 1;

	if(count == 1){
    second = 0;
    minute = 0; 
    hour = 0;
    timerStart();
	}


	let hideBox = () => {
		console.log(boxData.length, "enter in if")
		if(boxData.length === 2){
		(boxData[0] != boxData[1]) ? mainContainerData.forEach( ele => ele.classList.remove('unhide')) : count++;
		boxData.splice(0, boxData.length);
		mainContainerData.splice(0, mainContainerData.length)
		countMatch.textContent = `Match Count: ${count}`;
		// if(count == 8){
		// 	alert("Congrates You win The Game");
		// }
		}
	}
	setTimeout(hideBox, 500);
}

var second = 0 , minute = 0, hour = 0;
var timer = document.querySelector('.timer');
console.log(timer)
function timerStart(){
	setInterval(function timeinterval(){
		timer.innerHTML = minute+" :minute " +second+" :second";
		console.log(timer.innerHTML)
		second++;
		if(second == 60){
			minute++;
			second=0;
		}
		if(minute == 60){
			hour++;
			minute = 0;
		}


	},500)	

	if(second == 60){
		alert('your game is over')
	}
}
mainContainer.addEventListener('click', (e) => displayImage(e))
