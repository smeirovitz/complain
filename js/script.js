$(document).ready(function(){

$("#allhomeimages, #subhead").delay(2000).fadeIn(2000);


$(".card1").click(function(){
	event.preventDefault();
	if ( $(this).hasClass("notMoved") ) {
        $(".card1").stop().animate({left: "510px"}, 500);                           
    } 

	else {
        $(".card1").stop().animate({left:"0px"}, 500);
    }
    $(this).toggleClass("notMoved");
    return false;
});

$(".card2").click(function(){
	event.preventDefault();
	if ( $(this).hasClass("notMoved") ) {
        $(".card2").stop().animate({left: "510px"}, 500);                           
    } 

	else {
        $(".card2").stop().animate({left:"0px"}, 500);
    }
    $(this).toggleClass("notMoved");
    return false;
});

$(".card3").click(function(){
	event.preventDefault();
	if ( $(this).hasClass("notMoved") ) {
        $(".card3").stop().animate({left: "510px"}, 500);                           
    } 

	else {
        $(".card3").stop().animate({left:"0px"}, 500);
    }
    $(this).toggleClass("notMoved");
    return false;
});

$(".card4").click(function(){
	event.preventDefault();
	if ( $(this).hasClass("notMoved") ) {
        $(".card4").stop().animate({left: "510px"}, 500);                           
    } 

	else {
        $(".card4").stop().animate({left:"0px"}, 500);
    }
    $(this).toggleClass("notMoved");
    return false;
});

$(".card5").click(function(){
	event.preventDefault();
	if ( $(this).hasClass("notMoved") ) {
        $(".card5").stop().animate({left: "510px"}, 500);                           
    } 

	else {
        $(".card5").stop().animate({left:"0px"}, 500);
    }
    $(this).toggleClass("notMoved");
    return false;
});








});

