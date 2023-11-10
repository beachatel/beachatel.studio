// // rotates hamburger svg 90 degrees on click

// $('#hamburger').click(function(){
//     $('#hamburger').css('transform', 'scale(1,-1) ');
// });



function rotateSVG() {
    var svg = document.getElementById('rotatable-svg');
    svg.classList.toggle('rotate-90');
  }