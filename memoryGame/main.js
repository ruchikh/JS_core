
const mainContainer = document.querySelector('.main-container');
const box = document.querySelectorAll('.box');
const boxData = [];
const mainContainerData = []


const iconBoxes =[
	  `<div class="box"><i class="fab fa-500px"></i></div>`,
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


mainContainer.innerHTML = iconBoxes.sort(e => 0.5 - Math.random()).join('');

// function displayContainer(){
// 	iconBoxes.forEach(p => mainContainer.innerHTML += p)
// }

// displayContainer();+

function displayImage(event){
	const target = event.target;
	console.log(target)
	const targetIcon = event.target.childNodes[0].classList.value;
	console.log(targetIcon)
	target.classList.add('unhide')
	mainContainerData.push(target)
	boxData.push(targetIcon)
	console.log(boxData)
	console.log(mainContainerData)


}


let hideBox = () => {
		console.log(boxData.length, "enter in if")
		if(boxData.length === 2){
		(boxData[0] != boxData[1]) ? mainContainerData.forEach( ele => ele.event.target.classList.remove('unhide')) : '';
		}
	setTimeout(hideBox, 1300);
}


mainContainer.addEventListener('click', (e) => displayImage(e))
