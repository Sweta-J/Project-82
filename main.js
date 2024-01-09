canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var colour;
var width;
var radius;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent ="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent ="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent ="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("Last position of x and y coordinates :");
        console.log("x = " + last_position_of_x + ", y = " + last_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI)
        console.log("Current position of x and y coordinates :");
        console.log("x = " + current_position_of_x + ", y = " + current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}