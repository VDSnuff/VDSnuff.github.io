	/*My scripts*/

	/*Scroll*/
	$(document).ready(function ($) {
	    $(".scroll").click(function (event) {
	        event.preventDefault();
	        $('html,body').animate({
	            scrollTop: $(this.hash).offset().top
	        }, 1200);
	    });
	});
	/*End Scroll*/

	/*Portfolio Show-Hide*/
	$(document).ready(function () {
	    $("#showAll").click(function () {
	        $(".img-responsive").show(500);
	    });
	    $("#showWeb").click(function () {
	        $(".img-responsive").show();
	        $("#c3, #c4, #c5, #c6, #c7, #c8").hide(500);
	    });
	    $("#showGraphic").click(function () {
	        $(".img-responsive").show();
	        $("#c1, #c2, #c3, #c7, #c8").hide(500);
	    });
	    $("#showFlat").click(function () {
	        $(".img-responsive").show();
	        $("#c1, #c2, #c3, #c5, #c6").hide(500);
	    });
	});
	/*End Portfolio Show-Hide*/
