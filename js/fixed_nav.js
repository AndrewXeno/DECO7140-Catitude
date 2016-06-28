/*This script is used to get navigation bar fixed to the page top when user scroll down. This could help user navigate more easily when browsing our website. Script is adapted from http://www.cnblogs.com/yjzhu/archive/2013/01/18/2866782.html. Andy Epifani helped me to understand how it works and I implemented it with horizontal scroll function (the original one cannot scroll horizontally).*/


function changePos(id) {            /*set position according to navbar height */
    "use strict";
    var obj = document.getElementById(id), scrollTop = document.documentElement.scrollTop || document.body.scrollTop, scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    if (scrollTop < 160) {
        obj.style.position = 'relative';
        obj.style.left = 0;
    } else {
        obj.style.position = 'fixed';
        obj.style.top = 0;
        obj.style.left = -scrollLeft + "px";        /*adjust navbar if horizontal scroll applies*/
    }
}
function fixMenu(id) {              /*call changePos when user scrolls the page*/
    "use strict";
    var obj = document.getElementById(id);
    window.onscroll = function () {
        changePos(id);
    };
}

window.onload = function () {       /*call fixMenu when page is loaded*/
    "use strict";
    fixMenu('navbar');
};