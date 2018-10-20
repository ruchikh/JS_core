var background = document.getElementById('background-color');
background.addEventListener('click', changeColor, false);
background.addEventListener('dblclick', changeColor, false);

// Generate random color
function makeRandomColor() {
  var values = '0123456789ABCDEF';
  var color = "";
  for(var i = 0; i < 6; i++){
    color += values[Math.floor(Math.random() * 16)];
  }
  return `#${color}`;
}

// var colors = ["grey", "aqua", "cornflower", "salmon", "orange", "black", "purple", "pink"];

function changeColor() {
  var col = document.getElementById("background-color");
  col.style.backgroundColor = makeRandomColor();
}

changeColor()