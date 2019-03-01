const header = document.querySelector('.header');
const button = document.querySelector('.button');
const maincontainer = document.querySelector('.main-container');
const setcolor = document.querySelectorAll('.setcolor')
console.log(setcolor)

function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
setcolor.forEach(item => {
	const color = get_random_color();
	item.innerHTML = color;
	item.style.background = color;
})

let colorname = document.querySelectorAll('.colorname');
console.log(colorname)
	colorname.forEach(val => {
		console.log(val)
		const color = get_random_color();
		val.innerHTML = color.toUpperCase().split('#').join('');
	})

// setcolor.style.background = get_random_color();


button.addEventListener('click', get_random_color)
