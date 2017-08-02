console.log("Morpion time");
var i = 0;

$(".case").click(function() { 

	
		if(i%2 === 0) {
			($(this).html("<img src='Croix.png' width=50px height=50px>")); 
		} else {

			($(this).html("<img src='Cercle.png' width=50px height=50px>")); 
		}
		i++;
	
}); 

