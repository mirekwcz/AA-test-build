var globals = {}; 

/*window.addEventListener("load", Init); */
window.onload = function () {Init(body_wrapper_event_handler, animated_text_event_handler, animated_img_2_event_handler);}

function Init(bw_ev_handler, at_ev_handler, ai2_ev_handler) {
    globals.body_wrapper = document.getElementById("body-wrapper");
    globals.animated_txt = document.getElementById("animated-txt");
    globals.animated_img_2 = document.getElementById("animated-img-2");
    globals.animated_video = document.getElementById("animated-video");
    pfx = ["webkit", "moz", "MS", "o", ""];
    // animation listener events
    prefixed_event(globals.body_wrapper, "AnimationEnd", bw_ev_handler);
    prefixed_event(globals.animated_txt, "AnimationEnd", at_ev_handler);
    prefixed_event(globals.animated_img_2, "AnimationEnd", ai2_ev_handler);
}

//apply prefixed event handlers
function prefixed_event(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}

//--- event handlers / callback functions (one for each html element: 'body-wrapper', 'animated-txt' and 'animated-img-2' 
function body_wrapper_event_handler(e) {
    display_txt(); //display text: See the World Through Her Eyes
}

function animated_text_event_handler (e) {
    display_img_2 ();  // display an image of VSK (vegan starter kit) with text: then change it 
}

function animated_img_2_event_handler (e) {
    // display_video ();
}

//-----------------------------------
function display_txt() {
    globals.animated_txt.classList.add("fade-in-txt"); //execute fade-in text animation
};

function display_img_2() {
    globals.animated_img_2.style.visibility="visible";
    globals.animated_img_2.classList.add("fade-in-img2"); //execute fade-in img 2 animation
}

function display_video () {
    globals.animated_video.style.visibility="visible";
    globals.animated_video.classList.add("fade-in-video"); //add class 'fade-in-video' to video element, so that it is displayed on the screen 
}
