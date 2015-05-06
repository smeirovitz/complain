$(document).ready(function(){

$("#allhomeimages, #subhead").delay(2000).fadeIn(2000);

//PART OF PHONE PAGE
$("#batterycharge").click(function(){
    $("#batterycharge").animate({width: "200px", height:"200px"}, 2000);
});

//SLEEP PAGE
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

//PHONE DEAD PAGE
$( "#appicons" ).click(function() {
    $( "#batterycharge" ).animate({
    width: "+=-10px"}, 300, function() {
    });
});


$("#twitterapp").click(function(){
    $("#app1").fadeIn(500);
});
$("#snapchatapp").click(function(){
    $("#app2").fadeIn(500);    
});
$("#messagesapp").click(function(){
    $("#app3").fadeIn(500);   
});
$("#phoneapp").click(function(){
    $("#app4").fadeIn(500); 
});
$("#instagramapp").click(function(){
    $("#app5").fadeIn(500);   
});
$("#facebookapp").click(function(){
    $("#app6").fadeIn(500);  
});
$("#usageapp").click(function(){
    $("#app7").fadeIn(500); 
});
$("#weatherapp").click(function(){
    $("#app8").fadeIn(500);   
});
$("#spotifyapp").click(function(){
    $("#app9").fadeIn(500);
});


//AIR HURTS PAGE
$( "#tempday1" ).click(function() {
    $( "#thermmove1" ).animate({
    height: "200px"}, 500, function() {
    });
});

$( "#tempday2" ).click(function() {
    $( "#thermmove2" ).animate({
    height: "250px"}, 500, function() {
    });
});

$( "#tempday3" ).click(function() {
    $( "#thermmove3" ).animate({
    height: "220px"}, 500, function() {
    });
});

$( "#tempday4" ).click(function() {
    $( "#thermmove4" ).animate({
    height: "180px"}, 500, function() {
    });
});

$( "#tempday5" ).click(function() {
    $( "#thermmove5" ).animate({
    height: "250px"}, 500, function() {
    });
});

$( "#tempday6" ).click(function() {
    $( "#thermmove6" ).animate({
    height: "255px"}, 500, function() {
    });
});

$( "#tempday7" ).click(function() {
    $( "#thermmove7" ).animate({
    height: "242px"}, 500, function() {
    });
});


$("#tempday1").click(function(){
    $("#temp1").fadeIn(500);
});
$("#tempday2").click(function(){
    $("#temp2").fadeIn(500);
});
$("#tempday3").click(function(){
    $("#temp3").fadeIn(500);
});
$("#tempday4").click(function(){
    $("#temp4").fadeIn(500);
});
$("#tempday5").click(function(){
    $("#temp5").fadeIn(500);
});
$("#tempday6").click(function(){
    $("#temp6").fadeIn(500);
});
$("#tempday7").click(function(){
    $("#temp7").fadeIn(500);
});






});

