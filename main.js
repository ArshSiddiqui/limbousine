//main.js

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status === 200) {
			console.log("in the block");
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

console.log("-------------------------------");
readTextFile("https://raw.githubusercontent.com/ArshSiddiqui/TheSunNeverSetsOnTheAmericanMilitaryBase/main/AmericanBases.json", function(text) {
	console.log("inside");
	var data = JSON.parse(text);
	console.log(text);
	for (let i = 0; i < 175; i++) {
	
	}
})