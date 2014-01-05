// Random Number Functions

// Math.random() => Float [0,1)

// Float within range [min,max]
function floatRange(min,max) {
	return min + (max-min)*Math.random();
}

// Int within range [min,max]
function intRange(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return min + Math.floor((max-min)*Math.random());
}

// Element from an array
function listChoice(arr) {
	return arr[Math.floor(arr.length*Math.random())];
}

// Boolean outcome from a given probability ( [0,1] )
function binaryChoice(p) {
	return Math.random() < p;
}

// Outcome x based on probability p
function randOutcome(arr) {
	var prob = Math.random(), i = 0;
	while (prob > arr[i].p) {
		prob -= arr[i].p;
		i++;
	}
	return arr[i].x;
}
