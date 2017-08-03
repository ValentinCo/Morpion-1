console.log("Morpion time");

var count = 0;



$(".case").click(function() { 

 // if(.1 && .2 && .3 === "<img>") {
 // alert("Waouuuuuuuuuu");
 //  }
	if($(this).html() === "") {
		if(count%2 === 0) {

			($(this).html("<img src='Croix.png' width=50px height=50px>")); 
		} else {

			($(this).html("<img src='Cercle.png' width=50px height=50px>")); 
		}

		count++;
	}

	
}); 

$(".clear").click(function() {
	$(".case").html("");
	count = 0;
});

