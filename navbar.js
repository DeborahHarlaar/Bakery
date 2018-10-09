function navBar(){
	var click = document.getElementById("topNavigation");
	if (click.className === "allNavigation"){
		click.className += " responsive";
	}else{
		click.className= "allNavigation";
	}
}