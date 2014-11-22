// JavaScript Document

jQuery(document).ready(function() {
	var SCount = $("#Slide ul li").length;
	var SW = $("#Slide ul li").width();
	var SH = $("#Slide ul li").height();
	var LimitW = SCount * SW;
	
	$("#Slide").css({width:SW, height:SH});
	$("#Slide ul").css({width:LimitW, marginLeft:-SW});
	$("#Slide ul li:last-child").prependTo("#Slide ul");
	
    $("#Prev").click(function() {
        $("#Slide ul").animate({left: +SW}, 200, function() {
            $("#Slide ul li:last-child").prependTo("#Slide ul");
            $("#Slide ul").css("left", "");
        });
    });
    $("#Next").click(function() {
        $("#Slide ul").animate({left: -SW}, 200, function() {
            $("#Slide ul li:first-child").appendTo("#Slide ul");
            $("#Slide ul").css("left", "");
        });
    });
});    
