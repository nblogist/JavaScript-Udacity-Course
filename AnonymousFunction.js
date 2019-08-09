/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num) {
    str = "";
    add = "ha"
    for(x=0;x<num;x++)
    {
        str+=add;
    }
    return str+"!";
}

console.log(laugh(10));
