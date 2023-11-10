var coll = document.getElementsByClassName("collapsible");
var i;

// script for collapsible menu
for (i = 0; i < coll.length; i++) {
    // makes page load toggle inactive
    coll[i].nextElementSibling.style.display = "none";

  coll[i].addEventListener("click", function() {
    this.classList.toggle("inactive");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




