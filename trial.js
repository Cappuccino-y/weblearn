let isMouseDown = false; // Dragging?
let prevX, prevY;
let element_here;
let newDiv;
let newContent
window.onload = function () {
    element_here = window.document.getElementById("div1")
    newDiv = window.document.createElement("div", {id: "div2"})
    newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    element_here.insertAdjacentElement("beforeend", newDiv)
    element_here.addEventListener("mousedown", mouseDown, false)
    element_here.addEventListener("mouseup", mouseUp, false)
    element_here.addEventListener("mousemove", mouseMove, false)
    // token = setTimeout(myFunc, 5 * 1000);
    // token = setInterval(myfunc, 3050);
    //clearInterval()
    window.open("https://www.hao123.com")
    //clearTimeout()
}


function mouseDown(event) {
    prevX = event.pageX;
    prevY = event.pageY;
    isMouseDown = true;
}


function myFunc() {
    console.log("lyy time for bed")
}

function myfunc() {
    console.log("lyy time for bed")
}

function mouseUp(event) {
    isMouseDown = false;
}

function mouseMove(event) {
    if (!isMouseDown) {
        return;
    }
    element_here.style.left = (element_here.offsetLeft +
        (event.pageX - prevX)) + "px";
    element_here.style.top = (element_here.offsetTop +
        (event.pageY - prevY)) + "px";
    prevX = event.pageX;
    prevY = event.pageY;
}