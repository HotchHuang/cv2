/* Set the width of the side navigation to 250px and 
   add a grey background color to body when open the right side navigation bar  */
function openNav() {
  document.getElementById("mySidenav").style.width = "180px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0, and 
after close bar reset the background corlor to original color */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "lightyellow";

}
