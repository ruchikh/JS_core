const header = document.querySelector('.header');
const button = document.querySelector('.button');
const maincontainer = document.querySelector('.main-container');
const setcolor = document.querySelectorAll('.setcolor')

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
colorname.forEach(val => {
	console.log(val)
	const color = get_random_color();
	val.innerHTML = color.toUpperCase().split('#').join('');
})


button.addEventListener('click', () => {
  setcolor.forEach(item => {
		const color = get_random_color();
		item.innerHTML = color;
	let colorname = document.querySelectorAll('.colorname');
	colorname.forEach(val => {
		val.innerHTML = color.toUpperCase().split('#').join('');
	})
		item.style.background = color;
	})

});
