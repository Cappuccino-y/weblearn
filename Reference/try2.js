document.addEventListener("DOMContentLoaded", function () {
    let cs = document.querySelector('pre')

    function hello() {
        cs.innerHTML = "hihi"
    }

    document.querySelector('#form_2').addEventListener('submit', function () {
        let value = document.querySelector('#F_name').value;
        alert(`hello ${value}`)
    })
    document.querySelector('#trial').disabled = true
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0)
            document.querySelector('#trial').disabled = false
        else
            document.querySelector('#trial').disabled = true
    }
    //some problems remained
    document.querySelector('#form_1').onsubmit = () => {
        const task = document.querySelector('#task').value
        const li = document.createElement('li')
        li.innerHTML = task
        document.querySelector('ul').appendChild(li)
        document.querySelector('#task').value = ''
        return false
    }
    document.querySelectorAll("button").forEach(function (button) {
        button.addEventListener('click', hello)
    })
})