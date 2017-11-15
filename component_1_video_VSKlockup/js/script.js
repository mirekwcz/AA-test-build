/*window.addEventListener("load", Init); */
window.onload = function () {Init();}

function Init() {
    body_wrapper = document.getElementById("body-wrapper");
    refText_1 = document.getElementById("text-on-img");
    pfx = ["webkit", "moz", "MS", "o", ""];
    // animation listener events
    PrefixedEvent(body_wrapper, "AnimationEnd", AnimationListener);

   // op = 0.0;
   // text_obj = document.getElementById("text-on-img");
   //	text_obj.style.opacity = op;
   //	id = setInterval(frame, 50); 
}

//apply prefixed event handlers
function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}

//handle animation events
function AnimationListener(e) {
    AnimateText_1();
}

function AnimateText_1() {
    refText_1.classList.add("fadeInTxt");
}

function frame() {
    if (op > 1.0) {
        clearInterval(id);
        text_obj.style.opacity = 1.0;
    } else {
        op = op + 0.01;
        text_obj.style.opacity = op;
    }
}
