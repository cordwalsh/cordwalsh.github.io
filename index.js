
$(document).ready(function(){
  $(".show").click(function(){
    $("#landing").hide(1500);
  });
  $(".back").click(function(){
    $("#landing").show(1500);
  });
  $(".bonus").click(function(){
    $(".bonus-page").show(1500);
  });
  $(".bonus-work").click(function(){
    $(".bonus-page").hide(1500);
  });
  $(".bonus-home").click(function(){
    $("#landing").show(1500);
    $(".bonus-page").hide(1000);
  });
  $(".bonus").click(function(){
    $(".bonus-grid").show();
  });
});



$(function () {
      $('.SendEmail').click(function (event) {
        var email = 'cordmwalsh@gmail.com';
        var subject = 'Portfolio';
        var emailBody = 'What up Cord,';
        var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
      });
    });
