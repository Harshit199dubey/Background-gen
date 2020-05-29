// 
var css=document.querySelector("h3");
var css1=document.querySelector("h1");
var css2=document.querySelector("h2");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var color3=document.querySelector(".color3");
var body=document.getElementById("colorg");
var random=document.querySelector(".random");
function gradents(){
	body.style.background ="linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+","
	+color3.value
	+")";
	// color1.style.backgroundColor=color2.value;
	// color2.style.backgroundColor=color3.value;
	// color3.style.backgroundColor=color1.value;
	css.textContent=body.style.background.replace("linear-gradient to right"," ");
}
function getRandomColor() {
 var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomColors(){
	color1.value =""+getRandomColor()+"";
	color2.value =""+getRandomColor()+"";
	color3.value =""+getRandomColor()+"";
	random.style.backgroundColor=""+getRandomColor()+"";
	random.style.borderColor=""+getRandomColor()+"";
	css.style.color=""+getRandomColor()+"";
	css1.style.color=""+getRandomColor()+"";
	css2.style.color=""+getRandomColor()+"";
	gradents();
}
color1.addEventListener("input",gradents);
color2.addEventListener("input",gradents);
color3.addEventListener("input",gradents);
 random.addEventListener("click",getRandomColors)