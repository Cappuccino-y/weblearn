function trial() {
    console.log('Val is:', val);
    let c = "lyy"

    for (var i = 0; i < 10; i++) {
        var val = i; // Hoisted to func start
    }
}

function foo() {
    var localVar;
    if (globalVar > 0) {
        var localVar2 = 2;
    }
// localVar2 is valid here
}


let aFuncVar = function (x) {
    console.log('Func called with', x);
    return x + 1;
};

function myFunc(routine) { // passed as a param
    console.log('Called with', routine.toString());
    let retVal = routine(10);
    console.log('retVal', retVal);
    return retVal;
}

myFunc(aFuncVar);
let bar = {"name": "Alice", age: 23, state: "California"};
console.log(Object.keys(bar))
let anArr = [1, 2, 3];
let date = new Date();
console.log(date.toString())
console.log(anArr[5])

let str = "halt"
let pattern = /HALT/i
console.log(pattern.test(str));
console.log('foo: bar;'.search(/...\s*:\s*...\s*;/));

element = window.document.createElement("div")
element2 = window.document.createElement("img")
element.style.display = "none"
element2.src = "newImage.jpg"
element.outerHTML = "<p>Sample <b>bold</b> display</p>"
element.textContent
element.innerText
element.innerHTML
element.appendChild(element2)
element.insertBefore(element)
element.removeChild(null)
window.location.href = "newPage.html";
document.querySelectorAll("div#container .shaded")
ac = require("./New2");
window.location.href = "newPage.html";
console.log("Reached point A");
alert("Wow!");
confirm("OK?");

// location read
element.offsetLeft
element.offsetTop
element.offsetParent
element.offsetHeight
element.offsetWidth

element.style.position = "absolute"; // anything but "static"
element.style.left = "40px";
element.style.top = "10px";
element.addEventListener("click", mouseClick);
element.onclick = mouseClick
