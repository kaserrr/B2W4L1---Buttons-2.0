var button1 = 1;
var button2 = 1;
var button3 = 1;

function change(id) {
	switch(id) {
		case 1 :
		document.getElementById("img1").src = "images/1.jpg";
		document.getElementById("img2").src = "images/bg1.jpg";
		document.getElementById("1").innerHTML = button1++;
		color(id);
		disabled(id);
		break;

		case 2:
		document.getElementById("img1").src = "images/2.jpg";
		document.getElementById("img2").src = "images/bg2.jpg";
		document.getElementById("2").innerHTML = button2++;
		color(id);
		disabled(id);
		break;

		case 3:
		document.getElementById("img1").src = "images/3.jpg";
		document.getElementById("img2").src = "images/bg3.jpg";
		document.getElementById("3").innerHTML = button3++;
		color(id);
		disabled(id);
		break;
	}
}

 function disabled(id) {
 	switch(id) {
 		case 1 :
 		document.getElementById("1").disabled = true;
 		document.getElementById("2").disabled = false;
 		document.getElementById("3").disabled = false;
 		break;

  		case 2 :
 		document.getElementById("1").disabled = false;
 		document.getElementById("2").disabled = true;
 		document.getElementById("3").disabled = false;
 		break;

 		case 3 :
 		document.getElementById("1").disabled = false;
 		document.getElementById("2").disabled = false;
 		document.getElementById("3").disabled = true;
 		break;
 	}
 }

 function color(id) {
 	switch(id) {
 		case 1 :
 		document.getElementById("1").style.backgroundColor = "red";
 		document.getElementById("2").style.backgroundColor = "lightgreen";
 		document.getElementById("3").style.backgroundColor = "lightgreen";
 		break;

  		case 2 :
 		document.getElementById("1").style.backgroundColor = "lightgreen";
 		document.getElementById("2").style.backgroundColor = "red";
 		document.getElementById("3").style.backgroundColor = "lightgreen";
 		break;

 		case 3 :
 		document.getElementById("1").style.backgroundColor = "lightgreen";
 		document.getElementById("2").style.backgroundColor = "lightgreen";
 		document.getElementById("3").style.backgroundColor = "red";
 		break;
 	}
 }