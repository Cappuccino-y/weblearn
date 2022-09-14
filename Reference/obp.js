let obj = {count: 0};
obj.increment = function (amount) {
    this.count += amount;
    return this.count;
}
obj.increment(3)

let o = {oldProp: 'this is an old property'};
o.aMethod = function () {
    this.newProp = "this is a new property";
    return Object.keys(this); // will contain 'newProp'
}
console.log(o.aMethod()) // will return ['oldProp','aMethod','newProp']
function func(arg) {
    console.log(this, arg);
}

console.log(func.toString())

func.call({t: 1}, 2) // similar to apply (array like)
let newFunc = func.bind({t: 2}, 32)
newFunc()

function Shape(width, height) {
    this.width1 = width;
    this.height1 = height;
}

Shape.prototype.area = function () {
    return this.width1 * this.height1;
}

let r = new Shape(26, 14); // {width: 26, height: 14}
console.log(Object.keys(r))

class Rectangle extends Shape { // Definition and Inheritance
    constructor(height, width) {
        super(height, width);
        this.height = height;
        this.width = width;
    }

    static countRects() { // Static method
        let aswqw = 32
        return aswqw
    }

    area() { // Method definition
        return this.width * this.height;
    }
}

let asr = new Rectangle(10, 20);
console.log(Object.keys(asr))

/*class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this); // What does this do?
    }

    clickHandler() {
    }

    render() {
        return (
            <div onClick={this.handleClick}>Hello World</div>
        );
    }
}*/

let asdq = [232, 23, 12, 3, 1]
asdq.map((val, ind) => val * ind)
console.log("0" == 0)
