$(document).ready(

function()
{

var vb = $(".col-sm-12").find("img").first();

  
  var va = [
    "images-slider-2/12.jpg",
    "images-slider-2/11.jpg",
    "images-slider-2/10.jpg",
    "images-slider-2/9.jpg",
    "images-slider-2/8.jpg",
    "images-slider-2/7.jpg",
    "images-slider-2/6.jpg",
    "images-slider-2/5.jpg",
    "images-slider-2/4.jpg",
    "images-slider-2/3.jpg",
    "images-slider-2/2.jpg",
    "images-slider-2/1.jpg",
  ];

  
  var i = 0;

 
  setInterval(function() {
    
    i = (i + 1) % va.length;  

    
    vb.fadeOut(function() {
      
      $(this).attr("src", va[i]);
      $(this).fadeIn();
    });

    
    

  }, 2000);
}
);