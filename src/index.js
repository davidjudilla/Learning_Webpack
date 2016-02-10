//Accept hot module reloading (HMR)
if (module.hot) module.hot.accept();

require('./styles.css');
var Please = require('pleasejs');
var div = document.getElementById('color');
var button = document.getElementById('button');

function changeColor(){
	div.style.backgroundColor = Please.make_color();
}

button.addEventListener('click', changeColor);