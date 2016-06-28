/*This script offers a simple photo gallery function in Cat Profiles section. User can switch to previous or next picture by clicking left or right area. Thumbnails are also listed below the main picture, which can also interact with.*/

var index = 1;                  /*variable(index) for indicating which picture is displaying*/

function lunaChange(obj) {      /*Change Luna gallery's background picture according to index*/
    "use strict";
    if (index == 1) {
        obj.style.backgroundImage = "url(images/Luna_1.jpg)";
    }
    if (index == 2) {
        obj.style.backgroundImage = "url(images/Luna_2.jpg)";
    }
    if (index == 3) {
        obj.style.backgroundImage = "url(images/Luna_3.jpg)";
    }
    if (index == 4) {
        obj.style.backgroundImage = "url(images/Luna_4.jpg)";
    }
    if (index == 5) {
        obj.style.backgroundImage = "url(images/Luna_5.jpg)";
    }
}

function lunaPrevious() {       /*When click previous interaction area, index-1 (or set to the end index if index reaches 0), and then call change() */
    "use strict";
    var pic = document.getElementById("gallery1");
    if (index == 1) {
        index = 5;
        lunaChange(pic);
    } else {
        index += -1;
        lunaChange(pic);
    }
}

function lunaNext() {       /*When click next interaction area, index+1 (or set to the start index if index exceeds max index), and then call change() */
    "use strict";
    var pic = document.getElementById("gallery1");
    if (index == 5) {
        index = 1;
        lunaChange(pic);
    } else {
        index += 1;
        lunaChange(pic);
    }
}

function lunaClick1() {            /*set index and change picture when user click thumbnails*/
    "use strict";
    var pic = document.getElementById("gallery1");
    index = 1;
    lunaChange(pic);
}

function lunaClick2() {
    "use strict";
    var pic = document.getElementById("gallery1");
    index = 2;
    lunaChange(pic);
}

function lunaClick3() {
    "use strict";
    var pic = document.getElementById("gallery1");
    index = 3;
    lunaChange(pic);
}

function lunaClick4() {
    "use strict";
    var pic = document.getElementById("gallery1");
    index = 4;
    lunaChange(pic);
}

function lunaClick5() {
    "use strict";
    var pic = document.getElementById("gallery1");
    index = 5;
    lunaChange(pic);
}

function miumiuChange(obj) {      /*Change Miu Miu gallery's background picture according to index*/
    "use strict";
    if (index == 1) {
        obj.style.backgroundImage = "url(images/MiuMiu_1.jpg)";
    }
    if (index == 2) {
        obj.style.backgroundImage = "url(images/MiuMiu_2.jpg)";
    }
    if (index == 3) {
        obj.style.backgroundImage = "url(images/MiuMiu_3.jpg)";
    }
    if (index == 4) {
        obj.style.backgroundImage = "url(images/MiuMiu_4.jpg)";
    }
}

function miumiuPrevious() {     /*When click previous interaction area, index-1 (or set to the end index if index reaches 0), and then call change() */
    "use strict";
    var pic = document.getElementById("gallery2");
    if (index == 1) {
        index = 4;
        miumiuChange(pic);
    } else {
        index += -1;
        miumiuChange(pic);
    }
}

function miumiuNext() {       /*When click next interaction area, index+1 (or set to the start index if index exceeds max index), and then call change() */
    "use strict";
    var pic = document.getElementById("gallery2");
    if (index == 4) {
        index = 1;
        miumiuChange(pic);
    } else {
        index += 1;
        miumiuChange(pic);
    }
}

function miumiuClick1() {            /*set index and change picture when user click thumbnails*/
    "use strict";
    var pic = document.getElementById("gallery2");
    index = 1;
    miumiuChange(pic);
}

function miumiuClick2() {
    "use strict";
    var pic = document.getElementById("gallery2");
    index = 2;
    miumiuChange(pic);
}

function miumiuClick3() {
    "use strict";
    var pic = document.getElementById("gallery2");
    index = 3;
    miumiuChange(pic);
}

function miumiuClick4() {
    "use strict";
    var pic = document.getElementById("gallery2");
    index = 4;
    miumiuChange(pic);
}