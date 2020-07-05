var i = 0;
var images = [
'assets/imgs/Designs/img (2).jpg',
'/assets/imgs/Designs/img (3).jpg',
'assets/imgs/Designs/img (4).jpg',
'/assets/imgs/Designs/img (5).jpg',
'/assets/imgs/Designs/img (6).jpg',
'/assets/imgs/Designs/img (7).jpg',
'/assets/imgs/Designs/img (8).jpg',
'/assets/imgs/Designs/img (9).jpg',
'/assets/imgs/Designs/img (10).jpg',
'/assets/imgs/Designs/img (11).jpg',
'/assets/imgs/Designs/img (12).jpg',
'/assets/imgs/Designs/img (13).jpg',
'/assets/imgs/Designs/img (14).jpg',
'/assets/imgs/Designs/img (15).jpg',
'/assets/imgs/Designs/img (16).jpg',
'/assets/imgs/Designs/img (17).jpg',
'/assets/imgs/Designs/img (18).jpg',
'/assets/imgs/Designs/img (19).jpg',
'/assets/imgs/Designs/img (20).jpg',
'/assets/imgs/Designs/img (21).jpg'
];
                            
function mySlide(param){
  if(param === 'next'){
    i++;
    if(i === images.length){ 
      i = images.length - 1; 
    }
  }
  else{
    i--;
    if(i < 0){ 
      i = 0; 
    }
  }
  document.getElementById('images').src = images[i];
}

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}