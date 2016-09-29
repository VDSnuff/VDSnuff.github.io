/*My scripts*/

/*Scroll*/
$(document).ready(function($) {
    $(".scroll").click(function(event) {
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

/* Current Position in menu */
var element1 = $("#About").offset().top;
var element2 = $("#Professional").offset().top;
var element3 = $("#Education").offset().top;
var element4 = $("#Computer").offset().top;
var element5 = $("#Interests").offset().top;
var element6 = $("#Personal").offset().top;
var element7 = $("#Recommend").offset().top;
$(window).scroll(function() {
    var y = $(window).scrollTop();
    if (y >= element1 - 70) {
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
/* End Current Position */