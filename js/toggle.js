/*This jQuery script is used for displaying and hiding information on homepage. In Update and News section, only 3 recent records will be displayed by default. User can click the small button beneath this section and more records will be shown. If user click it again, the extra information will hide. This is jQuery built-in effect.*/


$(document).ready(function(){
$("#toggle").click(function(){
    $("#hide").slideToggle("slow");
  });
});