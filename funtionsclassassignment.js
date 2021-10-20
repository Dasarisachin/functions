function isdivisble(number){
    if (number%4==0&&number%5!=0){
        return number+' is divisible by 4 but not 5';
    }
    else if (number %5==0 && number%4!=0){
        return number+' is divisible by 5 but not 4';
    }
    else{
        return number+' is not divisible by both 4 and 5';
    }
}

console.log((isdivisble(100)));
console.log(isdivisble(24));
console.log(isdivisble(2));