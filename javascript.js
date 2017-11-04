var gridSize = 16;
function createGrid(gridSize) {
	for (var i = 0; i < gridSize; i++) {
		for (var x = 0; x < gridSize; x++) {
			$("#container").append("<div class='square'></div>");
		};
		$("#container").append("<br />");
	};
	
		$(".square").hover(function() {
		$(this).css("background-color", "green");
	});
};

$(document).ready(function() {
	
	createGrid(16);


	$(".button").on('click', function () {
		$("#container").empty();
		var input = prompt("How many squares would you like?")
		var gridSize = parseInt(input);
		createGrid(gridSize);
	});
});