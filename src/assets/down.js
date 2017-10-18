window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.pageYOffset > $("#courses").offset().top - 3) {
    document.getElementById("arrow").style.display = "none";
    document.getElementById("arrow-top").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "block";
    document.getElementById("arrow-top").style.display = "none";
  }
}

function myDown(){
  $(function(){
    $( ".down" ).click( function() {
      if(window.pageYOffset < $("#categories").offset().top - 1){
        $('html, body').animate({
          scrollTop: $("#categories").offset().top
        }, 500);
      }
      else {
        $('html, body').animate({
          scrollTop: $("#courses").offset().top
        }, 500);
      }
    });
  });
}

function myTop(){
  $(function(){
    $( ".top" ).click( function() {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
    });
  });
}
