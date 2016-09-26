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

/* Location reload Method */
function reloadFunction() {
    location.reload();
}
/* End */