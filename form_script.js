/*let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button");

console.log(box);
console.log(btn);

*/
window.onload = function(){
    document.querySelector('.btnStart').onclick = function(){
        training();
    };
};


function mathOp(x, y, op) {
    var res;
    if (op == '+') {
        res = x + y;
    } else if (op == '-') {
        res = x - y;
    } else if (op == '*') {
        res = x * y;
    } else if (op == '/') {
        if (y == 0) {
            res = false;
        } else {
            res = x / y;
        }
    }
    else {
        res = false;
    }
    return res;
}

console.log(mathOp(5,6,'+'));
 console.log(mathOp(5,6,'-'));
 console.log(mathOp(5,6,'*'));
 console.log(mathOp(5,0,'/'));
 console.log(mathOp(5,0,'...'));


function codeToOp(num) {
    var variants = ['+', '-', '*', '/'];
    return variants[num];
}

function randomInt(min, max) {
    var length = max - min + 1;
    var rand = Math.floor(Math.random() * length) + min;
    return rand;
}

function training() {
var code, op, x, y, res, answer, ansTrue = 0, ansFalse = 0, errors = [];

var list = document.createElement("LIST");
list.setAttribute("type", "text");
list.setAttribute("value", "Hello World!");
document.body.appendChild(list);

for (var i = 0; i < 10; i++) {

    x = randomInt(1, 10);
    
    y = randomInt(1, 10);
    code = randomInt(0, 3);
    op = codeToOp(code);
    res = mathOp(x, y, op);
    answer = +prompt(x + " " + op + " " + y + " = ?");

    if (res.toFixed(2) == answer.toFixed(2)) {
        ansTrue++;
    } else {
        errors.push(x + " * " + y + " = " + res);
        ansFalse++;
    }
}

document.getElementById("ansTrue").value = ansTrue;
document.getElementById("ansFalse").value = ansFalse;

console.log("OK = " + ansTrue);
console.log("FALSE = " + ansFalse);

for (var ii = 0; ii < errors.length; ii++) {
    
    console.log("ERRORS = " + errors[ii]);
}

var items = '<ul>';
errors.forEach((el) => {
    items += '<li>' + el + '</li>'
});
items += '</ul>';
document.getElementById("res").innerHTML = items;
}

