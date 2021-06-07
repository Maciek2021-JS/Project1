const div = document.querySelector('div');

let divX = 150;
let divY = 50;

div.style.top = divY + "px";
div.style.left = divX + "px";

let insertDivX;
let insertDivY;

let grow = false;

div.addEventListener("mousedown", function(e) {
    div.style.backgroundColor = "gray";
    grow = !grow;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;

})

div.addEventListener("mousemove", function(e) {
    if (grow) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.top = `${divY}px`;
        div.style.left = `${divX}px`;
    }
})

div.addEventListener("mouseup", function() {

    div.style.backgroundColor = "black";
    grow = !grow;

})