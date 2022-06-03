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
readTextFile("https://raw.githubusercontent.com/ArshSiddiqui/limbousine/main/GhostTowns.json", function(text) {
	
	console.log("inside");
	var data = JSON.parse(text);
	console.log(text);
	
	const names = [];
	const lats = [];
	const longs = [];
	//const distances = [];
	console.log(data[0].name);
	for (let i = 0; i < 128; i++) {
		
		console.log(data[i].name);
		names.push(data[i].name);
		lats.push(data[i].latitude);
		longs.push(data[i].longitude);
	}
	
	//console.log(lats);
	
	determineDistances(names, lats, longs);
	
	
});
	
function determineDistances(names, lats, longs) {
	
	//console.log(lats)
	
	navigator.geolocation.getCurrentPosition(function(position) {
		
		const distances = [];
		
		let lat = position.coords.latitude;
		let lng = position.coords.longitude;
		
		console.log(lat);
		console.log(lng);
		
		for (let i = 0; i < lats.length; i++) {
			distances.push(Math.sqrt( Math.pow(lats[i] - lat, 2) + Math.pow(longs[i] - lng, 2) ));
		}
		
		//console.log(distances);
		
		let minSpot = findSmallest(distances);
		
		console.log("Nearest town: " + names[minSpot]);
	})
	
}

function findSmallest(distances) {
	console.log(distances);
	let smallestPoint = 0;
	for (let x = 0; x < distances.length; x++) {
		if (distances[x] < distances[smallestPoint]) {
			smallestPoint = x;
		}
	}
	return smallestPoint;
}


