let url = "https://www.bilibili.com/blackboard/activity-award-exchange.html?task_id=531d8377"
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
xhr = new XMLHttpRequest();
xhr.onreadystatechange = xhrHandler;
xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("id=78237489&type=fullname");


function xhrHandler(event) {
// this === xhr
    if (this.readyState != 4) { // DONE
        return;
    }
    if (this.status != 200) { // OK
        return; // Handle error ...
    }
    let text = this.responseText;
    console.log(text)
}