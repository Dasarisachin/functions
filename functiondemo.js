function add(num1, num2) {
    return num1 + num2;
}

function areaofcircle(radius) {
    return radius * radius * 3.142;
}

function iseven(num) {
    return num % 2 == 0;
}
console.log(iseven(123));
console.log(iseven(10));
console.log(iseven(11));
console.log(add(10, 70));

console.log(areaofcircle(123, 123));

function countDigits(num) {
    let count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;

}

function makeTwice(num){
    let count=countDigits(num);
    let result=0;
    switch(count){
        case 1:
            return num*10+num;
        case 2:
            return num*100+num;
        case 3:
            return num*1000+num;
        case 4:
            return num*10000+num;            
    }
} 

console.log(makeTwice(1));
console.log(makeTwice(12));
console.log(makeTwice(123));

console.log(countDigits(100));
console.log(countDigits(12345));
console.log(countDigits(6));