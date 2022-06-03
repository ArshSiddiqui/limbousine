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
readTextFile("https://raw.githubusercontent.com/ArshSiddiqui/limbousine/main/American-Ghost-Towns.geojson", function(text) {
	console.log("inside");
	var data = JSON.parse(text);
	console.log(text);
	console.log(text.features);
})

navigator.geolocation.getCurrentPosition(function(position) {
	let lat = position.coords.latitude;
	let lng = position.coords.longitude;
	
	console.log(lat);
	console.log(lng);
});