/*Scroll*/
$(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });
});

//$(document).ready(function() {
//    $(".toggle-trigger").click(function() {
//        $(this).parent().prevAll('.toggle-wrap').first().toggle('slow');
//    });
//});

/*End Scroll*/

/*Show Hide Func*/
//
//$(document).ready(function(){
//    $("#a3").click(function(){
//        $("#b3").toggle("fast");
//    });
//});
/* End */