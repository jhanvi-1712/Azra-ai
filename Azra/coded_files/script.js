$(document).ready(function(){
  $(".hamburger_icon").on("click",function(){
     $(".horizontal_menu").show();
    $(".horizontal_menu").children().slideToggle("slow");
    $(".multiply-icon").show();
    $(".hamburger_icon").hide();
    $(".horizontal_menu li").click(function(){
     $(this).children().css("color","#F4CDD4");
      $(this).siblings().children().css("color","#fff");
    })
//     console.log("hi")
  })
    $(".multiply-icon").on("click",function(){
     $(".horizontal_menu").hide();
    $(".horizontal_menu").children().hide();
    $(".multiply-icon").hide();
    $(".hamburger_icon").show();
//       console.log("hi")
  })
  
  
var solution = 0;
  function sols() {
    if (solution < 714) {
      solution += 1;  
    } 
    $('.card:nth-child(2) .number h1').text(solution + '+' );
  }
  setInterval(sols,6);
  
  
  var prof = 0;
  function profs() {
    if (prof < 411) {
      prof += 1;  
    } 
    $('.card:nth-child(3) .number h1').text(prof + '+' );
  }
  setInterval(profs,10);
  
  
  var percent = 0;
  function perc() {
    if (percent< 90) {
      percent += 1;  
    } 
    $('.card:nth-child(4) .number h1').text(percent + '%' );
  }
  setInterval(perc,48);
  
              
  
//   console.log("hi")
})