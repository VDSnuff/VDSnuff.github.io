/*My scripts*/

/* Up Down Arrow */
function funcUpDownArrow(CurId) {
    var x = document.getElementById(CurId);

    if (x.className === "fa fa-chevron-up") {
        x.className = "fa fa-chevron-down";
    } else {
        x.className = "fa fa-chevron-up";
    }
}
/* End */