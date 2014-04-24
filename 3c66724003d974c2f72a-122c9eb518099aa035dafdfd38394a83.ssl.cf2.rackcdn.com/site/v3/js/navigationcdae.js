var isMenuOpen;
var isUserOpen;

var wide = $(window).width();

$("html").click(function() {
	CloseMenu()
});

$(".mobile_menu_btn").click(function(e){
	e.stopPropagation();
	
	if(isUserOpen === "true"){
		$(".user_menu").removeClass('active');
		$(".user_nav_btn").removeClass('active');
		isUserOpen = "";
	}

	$(".mobile_menu").toggleClass("active");
  	$(".mobile_menu_btn").toggleClass("active");
  	isMenuOpen = "true";
});

if(wide >= "769"){
	$(".user_nav_btn").hover(function(e){
		$(".user_menu").toggleClass("active");
	  	$(".user_nav_btn").toggleClass("active");
	});
}else{
	$(".user_nav_btn").click(function(e){
		e.stopPropagation();
		
		$(".user_menu").css("width",wide);
		
		if(isMenuOpen === "true"){
			$(".mobile_menu").removeClass('active');
			$(".mobile_menu_btn").removeClass('active');
			isMenuOpen = "";
		}
		
		$(".user_menu").toggleClass("active");
	  	$(".user_nav_btn").toggleClass("active");
	  	isUserOpen = "true";
	});
}


$(".user_menu").click(function(e){
  e.stopPropagation();
});
$(".mobile_menu").click(function(e){
  e.stopPropagation();
});

function CloseMenu(){
	if(isUserOpen === "true"){
		$(".user_menu").removeClass('active');
		$(".user_nav_btn").removeClass('active');
		isUserOpen = "";
	}
	if(isMenuOpen === "true"){
		$(".mobile_menu").removeClass('active');
		$(".mobile_menu_btn").removeClass('active');
		isMenuOpen = "";
	}
}