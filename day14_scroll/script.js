$(document).ready(function(){
  $("#button1").click(function(){
    $('html,body').animate({
      scrollTop: $("#button2").offset().top},1000);
  });
  $("#button2").click(function(){
    $('html,body').animate({
      scrollTop: $("#button3").offset().top},1000);
  });
  $("#button3").click(function(){
    $('html,body').animate({
      scrollTop: $("#button4").offset().top},1000);
  }); 
    $("#button4").click(function(){
    $('html,body').animate({
      scrollTop: $("#button1").offset().top},1000);
  }); 
});
