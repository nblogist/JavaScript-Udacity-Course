/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here

function laugh(num) {
    str = "";
    add = "ha"
    for(x=0;x<num;x++)
    {
        str+=add;
    }
    return str+"!";
}

console.log(laugh(3));
