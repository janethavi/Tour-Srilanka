//If the user selects the 1st photo
function functionOne() {
	document.getElementById("brownspace").innerHTML = '<br><i>" Rail travel for me is the most relaxing, most scenic way to see the country "</i><br><br>-John Paul DeJoria';
	document.getElementById("jp").width = "90"; //Increase the selected photo's width
	document.getElementById("jp").height = "90"; //Increase the selected photo's Height
	//Decrease the size of non selected ones
	document.getElementById("jl").width = "60";
	document.getElementById("jl").height = "60";
	document.getElementById("ak").width = "60";
	document.getElementById("ak").height = "60";
	document.getElementById("va").width = "60";
	document.getElementById("va").height = "60";

}

//If the user selects the 2nd photo
function functionTwo() {
	document.getElementById("brownspace").innerHTML = '<br><i>" Jobs fill your pocket, but adventures will fill your soul "</i><br><br> -Jamie Lyn Beatty';
	document.getElementById("jp").width = "60";
	document.getElementById("jp").height = "60";
	document.getElementById("jl").width = "90"; //Increase the selected photo's width
	document.getElementById("jl").height = "90"; //Increase the selected photo's Height
	//Decrease the size of non selected ones
	document.getElementById("ak").width = "60";
	document.getElementById("ak").height = "60";
	document.getElementById("va").width = "60";
	document.getElementById("va").height = "60";
}

//If the user selects the 3rd photo
function functionThree() {
	document.getElementById("brownspace").innerHTML = '<br><i>" You need mountains,' + " long staircases don't make good" + ' hikers "</i> <br><br> -Amit Kalantri';
	//Decrease the size of non selected ones
	document.getElementById("jp").width = "60";
	document.getElementById("jp").height = "60";
	document.getElementById("jl").width = "60";
	document.getElementById("jl").height = "60";
	document.getElementById("ak").width = "90"; //Increase the selected photo's width
	document.getElementById("ak").height = "90"; //Increase the selected photo's Height
	document.getElementById("va").width = "60";
	document.getElementById("va").height = "60";
}

//If the user selects the 4th photo
function functionFour() {
	document.getElementById("brownspace").innerHTML = '<br><i>" When you travel, the battered old suitcase only tells half the story "</i> <br><br>-Virginia Alison';
	document.getElementById("jp").width = "60";
	document.getElementById("jp").height = "60";
	document.getElementById("jl").width = "60";
	document.getElementById("jl").height = "60";
	document.getElementById("ak").width = "60";
	document.getElementById("ak").height = "60";
	document.getElementById("va").width = "90"; //Increase the selected photo's width
	document.getElementById("va").height = "90"; //Increase the selected photo's Height
}