var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height);

// c.beginPath();
// c.moveTo(50, 100);
// c.lineTo(300, 100);
var mouse = {
	x: undefined,
	y: undefined
}

var colorArray = [
'#4286f4',
'#f441e8',
'#a51219',
'#bad836',
'#232121',
'#e22406',
];

window.addEventListener('mousemove', function(e){
	mouse.x = event.x;
	mouse.y = event.y
	console.log(mouse);
});

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
		c.fillStyle = this.color;
		// c.stroke();
		c.fill();
	}

	this.update = function(){
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}
		if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
			
			this.dy = -this.dy;

		}
	 	this.x += this.dx;
	 	this.y += this.dy;

	 	if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
	 		if(this.radius < 40){
	 		this.radius += 1;
	 		}
	 	}else if(this.radius > 2) {
	 		this.radius -= 1;
	 	}
	 	this.draw();
	}
}

var circleArray = [];

for(var i = 0; i < 1000; i++){
	var radius = Math.random;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 8;
	var dy	 = (Math.random() - 0.5) * 8;
	circleArray.push(new Circle(x, y, dx, dy, radius));

}
console.log(circleArray);

	function animate(){
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);	

		for(var i = 0; i < circleArray.length; i++){
			circleArray[i].update();
		}
	};


animate();

