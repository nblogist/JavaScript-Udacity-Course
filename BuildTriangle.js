/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(num) {
    str=""
    for(let x = 1 ; x <= num ; x++)
    {
        str+=makeLine(x);
    }
    return str
}


// test your code by uncommenting the following line
    console.log(buildTriangle(10));
