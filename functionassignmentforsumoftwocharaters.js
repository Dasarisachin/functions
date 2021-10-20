function sumoftwocharacters(number) {
    a = parseInt(number.charAt(0));
    b = parseInt(number.charAt(1));
    return a + b;
}
var number = '25';
add = sumoftwocharacters(number);
console.log(add)