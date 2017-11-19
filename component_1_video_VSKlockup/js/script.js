var globals = {}; 

/*window.addEventListener("load", Init); */
//window.onload = function () {Init(body_wrapper_ev_handler, animated_txt_ev_handler, animated_txt_2_ev_handler, animated_img_2_ev_handler);}
window.onload = function () {Init ();};
//function Init(bw_ev_handler, at_ev_handler, ai2_ev_handler) {
function Init() {
    globals.body_wrapper = document.getElementById("body-wrapper");
    globals.animated_txt = document.getElementById("animated-txt");
    globals.animated_txt_2 = document.getElementById("animated-txt-2");
    globals.animated_img_2 = document.getElementById("animated-img-2");
    globals.animated_video = document.getElementById("animated-video");
    globals.footnote = document.getElementById("footnote");
    pfx = ["webkit", "moz", "MS", "o", ""];
    // animation listener events
    prefixed_event(globals.body_wrapper, "AnimationEnd", body_wrapper_ev_handler);
    prefixed_event(globals.animated_txt, "AnimationEnd", anim_txt_ev_handler);
    prefixed_event(globals.animated_txt_2, "AnimationEnd", anim_txt_2_ev_handler);
    prefixed_event(globals.animated_img_2, "AnimationEnd", anim_img_2_ev_handler);
    prefixed_event(globals.footnote, "AnimationEnd", footnote_ev_handler);
}

//apply prefixed event handlers
function prefixed_event(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}

//--- event handlers / callback functions (one for each html element: 'body-wrapper', 'animated-txt' and 'animated-img-2' 
function body_wrapper_ev_handler(e) {
    display_txt(); //display text: See the World Through Her Eyes.
}

function anim_txt_ev_handler (e) {
    display_txt_2 ();  // display 2nd text: Then change it.
    display_img_2 ();  // display an image of VSK (vegan starter kit) with text: then change it
    display_footnote (); // display footnote (including text: "1 in 3 Australians..." and the button labelled: "GET YOUR STARTER..."
}

function footnote_ev_handler (e) {
    globals.footnote.style.opacity=1;
    globals.animated_img_2.classList.add("move-vsk-down");
}

function anim_txt_2_ev_handler (e) {

}

function anim_img_2_ev_handler (e) {
    // display_video ();
}

//-----------------------------------
function display_txt() {
    globals.animated_txt.classList.add("fade-in-txt"); //execute fade-in text animation
};

function display_txt_2 () {
    globals.animated_txt_2.classList.add("fade-in-txt"); //execute fade-in text animation
}

function display_img_2 () {
    globals.animated_img_2.style.visibility="visible";
    globals.animated_img_2.classList.add("fade-in-img2"); //execute fade-in img 2 animation
}

function display_footnote () {
    globals.footnote.style.visibility="visible";
    globals.footnote.classList.add("fade-in-footnote");
}

function display_video () {
//    globals.animated_video.style.visibility="visible";
//    globals.animated_video.classList.add("fade-in-video"); //add class 'fade-in-video' to video element, so that it is displayed on the screen 
}
