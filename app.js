console.log("Morpion time");

var count = 0;
var vide = 0;
var croix = 1;
var rond = 2;
var array = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];


var joueur1 = prompt("Joueur 1:");
	$(".one").html(joueur1);
var joueur2 = prompt("Joueur 2:");
	$(".two").html(joueur2);

function reset() {
		$(".case").html("");
		array = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
}

function condition(arg1, arg2) {
	if(array[0] === arg1 && array[1] === arg1 && array[2] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	} if (array[3] === arg1 && array[4] === arg1 && array[5] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	} if (array[6] === arg1 && array[7] === arg1 && array[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	} if (array[0] === arg1 && array[3] === arg1 && array[6] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	} if (array[1] === arg1 && array[4] === arg1 && array[7] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
	} if (array[2] === arg1 && array[5] === arg1 && array[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!"); 
		reset();
	} if (array[0] === arg1 && array[4] === arg1 && array[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!"); 
		reset();
	} if (array[2] === arg1 && array[4] === arg1 && array[6] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!") ;
		reset();

	}
}
$(".case").click(function() { 
	var data = ($(this).data("col")) - 1;
 // console.log($(this).data("col"));
 // console.log(array[($(this).data("col"))- 1])



 if($(this).html() === "") {
 	if(count%2 === 0) {

 		($(this).html("<img src='Croix.png' width=50px height=50px>")); 
 		array[data] = croix;
 		condition(croix, joueur1);

 	} else {

 		($(this).html("<img src='Cercle.png' width=50px height=50px>")); 
 		array[data] = rond;
 		condition(rond, joueur2);
 	}
 	console.log(array);
 	count++;
 }

 if(count === 9) {
 	alert("Match nul!!");
 	reset();
 }
}); 

$(".clear").click(function() {
	$(".case").html("");
	count = 0;
	array = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
});







