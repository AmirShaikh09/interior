// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

//script to handle slideshow start
var i = 0;
var time = 2000;

//array items to loop through

const images =[
  '//images.ctfassets.net/lubcwcd807hc/6KeKi6vFZ0pB4ICRyS1PZr/415c04073b63ad9ef1a2961ea4e2b6af/loverseat-couch.jpg',
  '//images.ctfassets.net/lubcwcd807hc/1kKvXuiw3N8FLxZQYxHoLQ/8060a1744ddb47631f909608d2b04476/living-room-furnish-brown.jpg',
  '//images.ctfassets.net/lubcwcd807hc/2iK22aeBBv4CcJ8gkKRsLU/b30afb90f3fae7d8b04937f5aed72626/living-room-furnishing.jpg',
  '//images.ctfassets.net/lubcwcd807hc/4j0F1HcAQjpW4NCKXzIaoe/8900defb66de36a5063e3a62ccc0dbc8/grey-leather-bar-chairs.jpg',
  '//images.ctfassets.net/lubcwcd807hc/3kbauJCd0pi8wbJiskx8sv/f927d5c46b85f178488d5f538ad3b3ff/brown-wooden-table.jpg',
  '//images.ctfassets.net/lubcwcd807hc/1l3bQfK369sAiTzUWhaDc4/2dca6152dba6c28a75c9da75da70bc49/brown-padded-armchair.jpg',
  '//images.ctfassets.net/lubcwcd807hc/7dkY0sDHhDwNnqHDCK1nq/2633a37972a8d08773884b2bb3ec4c90/blue-leather-sofa.jpg',
  '//images.ctfassets.net/lubcwcd807hc/49RFRjm3ezml1lG2WNil1i/2aa45698817107a8faeb5da62a0a685a/glassdoor.jpg',
  '//images.ctfassets.net/lubcwcd807hc/7IZioLHEzrm6EuLzhEpTZN/6892a4e1e198a6193ea4808b258763a2/bathtub-vanity-sink.jpg'
];

//chane img

function changeImg(){
  document.slide.src = images[i];

  if(i<images.length - 1){
    i++;
  }
  else{
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

//script to handle slideshow end