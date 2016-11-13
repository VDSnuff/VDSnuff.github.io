/*Scroll*/
$(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });
});
/* Current Position in menu */
$(document).ready(function() {
var element1 = $("#About").offset().top;
var element2 = $("#Professional").offset().top;
var element3 = $("#Computer").offset().top;
var element4 = $("#Education").offset().top;
var element5 = $("#Interests").offset().top;
var element6 = $("#Personal").offset().top;
var element7 = $("#Recommend").offset().top;
$(window).scroll(function() {
    var y = $(window).scrollTop();
    if (y >= element1) {
        document.getElementById("s1").style.display = "inline-block";
        document.getElementById("s2").style.display = "none";
    }
    if (y >= element2 - 70) {
        document.getElementById("s1").style.display = "none";
        document.getElementById("s2").style.display = "inline-block";
        document.getElementById("s3").style.display = "none";
    }
    if (y >= element3 - 70) {
        document.getElementById("s2").style.display = "none";
        document.getElementById("s3").style.display = "inline-block";
        document.getElementById("s4").style.display = "none";
    }
    if (y >= element4 - 70) {
        document.getElementById("s3").style.display = "none";
        document.getElementById("s4").style.display = "inline-block";
        document.getElementById("s5").style.display = "none";
    }
    if (y >= element5 - 70) {
        document.getElementById("s4").style.display = "none";
        document.getElementById("s5").style.display = "inline-block";
        document.getElementById("s6").style.display = "none";
    }
    if (y >= element6 - 70) {
        document.getElementById("s5").style.display = "none";
        document.getElementById("s6").style.display = "inline-block";
        document.getElementById("s7").style.display = "none";
    }
    if (y >= element7 - 70) {
        document.getElementById("s6").style.display = "none";
        document.getElementById("s7").style.display = "inline-block";
    }
});
   
  $("#hideTrigger1").click(function(){
        $("#hide1").toggle("fast");
        $("#hideTrigger1").find("i").toggleClass("fa-chevron-down");
    });

    $("#hideTrigger2").click(function(){
        $("#hide2").toggle("fast");
         $("#hideTrigger2").find("i").toggleClass("fa-chevron-down");
    });   
    
     $("#hideTrigger3").click(function(){
        $("#hide3").toggle("fast");
          $("#hideTrigger3").find("i").toggleClass("fa-chevron-down");
    });    

     $("#hideTrigger4").click(function(){
        $("#hide4").toggle("fast");
          $("#hideTrigger4").find("i").toggleClass("fa-chevron-down");
    });    

     $("#hideTrigger5").click(function(){
        $("#hide5").toggle("fast");
          $("#hideTrigger5").find("i").toggleClass("fa-chevron-down");
    });    

     $("#hideTrigger6").click(function(){
        $("#hide6").toggle("fast");
          $("#hideTrigger6").find("i").toggleClass("fa-chevron-down");
    });  
    
      $("#hideTrigger7").click(function(){
        $("#hide7").toggle("fast");
           $("#hideTrigger7").find("i").toggleClass("fa-chevron-down");
    });    

});

/* End Current Position */
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