function modalDisplay(num) {
    console.log(num);
// Get the modal
var modal = document.getElementById('myModal'+num);
//console.log(modal);
// Get the button that opens the modal
var btn = document.getElementById("trigger-modal"+num);
modal.style.display = "block";
//embedUt(num);
// Get the <span> element that closes the modal
var span = document.getElementById('closeit'+num);
// When the user clicks the button, open the modal 
//btn.onclick = function() {

//}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}
}