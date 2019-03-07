window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById("navigation").style.top = "0";
		document.getElementById("navigation").style.position = "fixed";
		document.getElementById("navigation").style.transition = "1s";
		document.getElementById("navigation").style.opacity = "1";
	} else {
		document.getElementById("navigation").style.position = "relative";
		document.getElementById("navigation").style.opacity = "0.7";
		document.getElementById("navigation").style.top = "0";
	}
}