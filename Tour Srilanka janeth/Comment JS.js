+function validateFields() {
	//initializing the variables
	var radios = document.getElementsByName("rate");
	var fname = document.getElementById('firstNameTxt').value;
	var lname = document.getElementById('lastNameTxt').value;

	var formValid = false;
	var noErr = true;

	//checking if the radio buttons have checked
	var i = 0;
	while (!formValid && i < radios.length) {
		if (radios[i].checked) {
			formValid = true;
		}
		i++;
	}

	//check if the required fields are filled
	if (document.getElementById('firstNameTxt').value == "" || !formValid) {
		alert("Please fill all the required fields");
		noErr = false;
	}

	//if the required fields are filed check if the data is correct
	if (noErr == true) {
		if ((!isNaN(parseInt(fname))) || (!isNaN(parseInt(lname)))) {
			alert("Please enter a valid name");
			noErr = false;
		}
	}

	//if all the data are correct display messages
	if (noErr == true) {
		if (document.getElementById('comment').value == "") {
			displayMessege(); //if the user has added no comments run this method
		} else {
			displayMessegeWithComment(); //if the user has added comments run this method
		}
	}

}


function displayMessegeWithComment() {
	//initializing the variables
	var name = document.getElementById('firstNameTxt').value;
	var comment = document.getElementById('comment').value;
	var rate;

	//getting the radio button values
	if (document.getElementById('vb').checked) {
		rate = document.getElementById('vb').value;
	}
	if (document.getElementById('b').checked) {
		rate = document.getElementById('b').value;
	}
	if (document.getElementById('g').checked) {
		rate = document.getElementById('g').value;
	}
	if (document.getElementById('vg').checked) {
		rate = document.getElementById('vg').value;
	}
	if (document.getElementById('p').checked) {
		rate = document.getElementById('p').value;
	}

	//display the message with the user entered comment
	alert("Dear " + name + ", Thank you very much for your feedback. You have rated our site as " + rate + " and your comment was " + comment + ".");
}


function displayMessege() {
	var name = document.getElementById('firstNameTxt').value;
	var rate;

	//getting the values from the radio buttons
	if (document.getElementById('vb').checked) {
		rate = document.getElementById('vb').value;
	}
	if (document.getElementById('b').checked) {
		rate = document.getElementById('b').value;
	}
	if (document.getElementById('g').checked) {
		rate = document.getElementById('g').value;
	}
	if (document.getElementById('vg').checked) {
		rate = document.getElementById('vg').value;
	}
	if (document.getElementById('p').checked) {
		rate = document.getElementById('p').value;
	}

	//display the message without any comments 
	alert("Dear " + name + ", Thank you very much for your feedback. You have rated our site as " + rate);
}