/*jslint node: true */
"use strict";
/*if (!process.env.BROWSER) {
    global.window = {};
}*/

function init() {
    var heart = document.getElementsByClassName('heart')[1],
        pfx = ["webkit", "moz", "MS", "o", ""],
        hovered = false;   
    PrefixedEvent(heart, "AnimationIteration", AnimationListener);
    heart.onmouseover = function () {
        hovered = true;
    }

    heart.onmouseout = function () {
        setTimeout(function () { hovered = false; }, 500);
        PrefixedEvent(heart, "TransitionEnd", TransitionListener);
        heart.style.webkitTransform = 'scale(1)';
        heart.style.MozTransform = 'scale(1)';
        heart.style.msTransform = 'scale(1)';
        heart.style.OTransform = 'scale(1)';
        heart.style.transform = 'scale(1)';
    }
}

function AnimationListener() {
    if (hovered) {
        heart.classList.remove('animated');
        heart.style.webkitTransform = 'scale(2)';
        heart.style.MozTransform = 'scale(2)';
        heart.style.msTransform = 'scale(2)';
        heart.style.OTransform = 'scale(2)';
        heart.style.transform = 'scale(2)';
    }
}

function TransitionListener() {
    if (!hovered) {
        heart.classList.add('animated');
    }
}

function PrefixedEvent(element, type, callback) {
    var p = 0;
    for (p = 0; p < pfx.length; p = p + 1) {
        if (!pfx[p]) {
            type = type.toLowerCase();
        }
        element.addEventListener(pfx[p] + type, callback, false);
    }
}