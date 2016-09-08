var calcButtons = document.getElementsByClassName('calc_button');
console.log(calcButtons);

var firstNum;
var seconNum;
var operator;
var result;


for(var i = 0; i < calcButtons.length; i++) {
  var button = calcButtons[i];
  console.log(button);
  button.addEventListener('click', function(event) {
    console.log(event)
  });
}

var calcInput = document.getElementById('calc_input');

calcInput.addEventListener('click', function(e) {
  if(e.innerText === 
    calcInput.innerText = '';
  console.log(e);

});
