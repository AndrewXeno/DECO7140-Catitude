/*In order to avoid invalid booking information submissions, this JavaScript is used for verify user's input in booking form. If all compulsory fields are filled, it will display a confirmation message in blue and clear all input data, or it will display alert message in red and highlight incomplete fields with red background colour. changeColor() function will reset background colour back to white when user click the input field.*/

function formValidation() {             /*Verify each compulsory input fields and display messages */
    "use strict";
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var prefix = document.getElementById("prefix");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var catname = document.getElementById("catname");
    var catage = document.getElementById("catage");
    var catbreed = document.getElementById("catbreed");
    var visittype = document.getElementById("visittype");
    var description = document.getElementById("description");
    var visitdate = document.getElementById("visitdate");
    var visittime = document.getElementById("visittime");
    var feedback = document.getElementById("feedback");
    var check = true;
    
    if (lname.value == "") {
        lname.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (prefix.value == 0) {
        prefix.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (email.value == "") {
        email.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (visittype.value == 0) {
        visittype.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (visitdate.value == "") {
        visitdate.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (visittime.value == "") {
        visittime.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (check == false) {
        feedback.style.color = "#ffffff";
        feedback.style.color = "#ff0000";
        feedback.innerHTML = "Please fill in all required fields that in red.";
        return false;
    } else {
        feedback.style.color = "#0094cc";
        feedback.innerHTML = "Booking information submitted successfully! Thank you.";
        fname.value = "";
        lname.value = "";
        prefix.value = 0;
        phone.value = "";
        email.value = "";
        catname.value = "";
        catage.value = "";
        catbreed.value = "";
        visittype.value = 0;
        description.value = "";
        visitdate.value = "";
        visittime.value = "";
        return true;
    }
}

function changeColor(input) {                 /*reset input background colour and alert message when click on input fields*/
    "use strict";
    input.style.backgroundColor = "#FFFFFF";
    feedback.innerHTML = "";
}

