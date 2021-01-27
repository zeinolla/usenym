var video1= document.getElementById("ata22");
var image= document.getElementById("ata33");
var play=document.getElementById("play2");

play.addEventListener("click",function(){
    image.style.display="none";
    video1.style.display="block";
    document.getElementById('kos').volume = 0.2;
    image1.style.display="block";
    video11.style.display="none";
    document.getElementById('kos1').pause();

 
 
    image12.style.display="block";
    video112.style.display="none";
    document.getElementById('kos2').pause();


});


var video11= document.getElementById("ata221");
var image1= document.getElementById("ata331");
var play1=document.getElementById("play21");

play1.addEventListener("click",function(){
    image1.style.display="none";
    video11.style.display="block";
    document.getElementById('kos1').volume = 0.1;
    image.style.display="block";
    video1.style.display="none";
    document.getElementById('kos').pause();



    image12.style.display="block";
    video112.style.display="none";
    document.getElementById('kos2').pause();



 
});





var video112= document.getElementById("ata222");
var image12= document.getElementById("ata332");

var play12=document.getElementById("play22");

play12.addEventListener("click",function(){
    image12.style.display="none";
    video112.style.display="block";
    document.getElementById('kos2').volume = 0.1;
    image.style.display="block";
    video1.style.display="none";
    document.getElementById('kos').pause();
    image1.style.display="block";
    video11.style.display="none";
    document.getElementById('kos1').pause();




 
});

function funcx1() {
    window.scrollTo(0, 150);
  }
    

  function funcx2() {
    window.scrollTo(0, 900);
  }
    
function funcx3() {
    window.scrollTo(0, 900);

    
}

$(document).ready(function(){
    $("li").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });   

