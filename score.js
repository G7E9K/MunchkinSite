function level_plus(i){
	var elem = document.getElementsByClassName("level")[i-1];
	elem.textContent = Number(elem.textContent) + 1;
	if(elem.textContent==10){
		name = document.getElementById("name" + i).value;
		alert(name + " победил!");
	}
	power_plus(i);
}

function level_minus(i){
	var elem = document.getElementsByClassName("level")[i-1];
	if(elem.textContent!=1){
		elem.textContent = Number(elem.textContent) - 1;
		power_minus(i);
	}
	
}

function stuff_plus(i){
	var elem = document.getElementsByClassName("stuff")[i-1];
	elem.textContent = Number(elem.textContent) + 1;
	power_plus(i);
}

function stuff_minus(i){
	var elem = document.getElementsByClassName("stuff")[i-1];
	elem.textContent = Number(elem.textContent) - 1;
	power_minus(i);
}

function power_plus(i){
	var elem = document.getElementsByClassName("power")[i-1];
	elem.textContent = Number(elem.textContent) + 1;
}

function power_minus(i){
	var elem = document.getElementsByClassName("power")[i-1];
	elem.textContent = Number(elem.textContent) - 1;
}