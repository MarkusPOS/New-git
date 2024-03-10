const keys = ['logo1', 'logo2', 'logo3', 'logo4'];
const logos = [];
keys.forEach(function(key){
  logos.push(document.getElementById(key));
})


function upsize(event) {
    event.target.style.maxWidth = "120px";
    event.target.style.maxHeight = "120px";

}
function downsize(event) {
    event.target.style.maxWidth = "80px";
    event.target.style.maxHeight = "80px";

}

let size = function (element){
    element.onmouseover = function(){
        upsize(event);
    }
    element.onmouseout = function(){
        downsize(event);
    }
}
logos.forEach(size);