/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $("button").click(function(){
      
      /* this if else to change the text in the button */
      if($("button").text() == "☰"){
       $("button").text("🞬");
      }else{
        $("button").text("☰");
      }
    
    /* this function toggle the visibility of our "li" elements */
    $("#nav ul li").toggle("slow");       /* dodata #nav ul li ... da ne bi uticalo na slajder */
  });
});

/* link gde je pokupljen hamburger menu https://itnext.io/how-to-create-a-responsive-navigation-bar-with-html-css-and-jquery-step-by-step-tutorial-9c780b58479f */