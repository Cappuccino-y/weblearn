let globalVar = 1

function localFunc(argVar) {
    let localVar = 0;

    function embedFunc() {
        return ++localVar + argVar + globalVar;
    }

    return embedFunc;
}

let myFunc = localFunc(10);
console.log(myFunc())
console.log(myFunc())

let myObj = (function () {
    let privateProp1 = 1;
    let privateProp2 = "test";
    let setPrivate1 = function (val1) {
        privateProp1 = val1;
    }
    let compute = function () {
        return privateProp1 + privateProp2;
    }
    return {compute: compute, setPrivate1: setPrivate1};
})();
myObj.compute()

'use strict';

'use strict';

function readFileMethod() {
    fs.readFile(this.fileName, (err, data) => {
        if (!err) {
            console.log(this.fileName, 'has length', data.length);
        }
    });
}

let obj = {fileName: "aFile", readFile: readFileMethod};
obj.readFile();