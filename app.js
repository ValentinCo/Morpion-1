$("#exampleModal").modal("show");  //Arriver du modal

var count = 0;
var vide = 0;
var croix = 1;
var rond = 2;
var score2 = 0;
var joueur1;
var joueur2;
var nbrGame = 0;
var tour = 0;
var array = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];


//Insert joueurs nombres de tours
$( "#recup").click(function() {
	joueur1 = $( ".j1" ).val();
	$(".one").html(joueur1);
	joueur2 = $(".j2").val();
	$(".two").html(joueur2);	
	nbrGame = parseInt($(".j3").val());
	$(".nbrPart").html(nbrGame);
});

//reset de la partie dans les conditions de victoires
function reset() {
	count = 0;
	$(".case").html("");
	array = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
}

//condition de victoire
function condition(arg1, arg2) {
	if(array[0] === arg1 && array[1] === arg1 && array[2] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
		tour++;
		
	} if (array[3] === arg1 && array[4] === arg1 && array[5] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
		tour++;
	} if (array[6] === arg1 && array[7] === arg1 && array[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
		tour++;
	} if (array[0] === arg1 && array[3] === arg1 && array[6] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
		tour++;
	} if (array[1] === arg1 && array[4] === arg1 && array[7] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!");
		reset();
		tour++;
	} if (array[2] === arg1 && array[5] === arg1 && array[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!"); 
		reset();
		tour++;
	} if (array[0] === arg1 && array[4] === arg1 && array[8] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!"); 
		reset();
		tour;
	} if (array[2] === arg1 && array[4] === arg1 && array[6] === arg1) {
		alert("Joueur" +" "+ arg2+ " " + "gagne!") ;
		reset();
		tour++;
	}
	
}
//click action
$(".case").click(function() { 
	var data = ($(this).data("col")) - 1;
 // console.log($(this).data("col"));
 // console.log(array[($(this).data("col"))- 1])
 if(tour < nbrGame) {
 	if($(this).html() === "") {
 		if(count%2 === 0) {

 			($(this).html("<img src='Croix.png' width=50px height=50px>")); 
 			array[data] = croix;
 			condition(croix, joueur1);
 			console.log(count)

 		} else {

 			($(this).html("<img src='Cercle.png' width=50px height=50px>")); 
 			array[data] = rond;
 			condition(rond, joueur2);
 			console.log(count)
 		}
 		console.log(array);

 		count++;
 	}

 	if(count === 9) {
 		alert("Match nul!!");
 		reset();
 		tour++;
 	}
 } if(tour === nbrGame){

 	alert("endgame");
 	tour = 0;
 	reset();
 }}); 
//reset via bouton
$(".clear").click(function() {
	$(".case").html("");
	// joueur1 = prompt("Joueur 1:");
	// $(".one").html(joueur1);
	// joueur2 = prompt("Joueur 2:");
	// $(".two").html(joueur2);
	count = 0;
	array = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
});

