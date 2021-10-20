function isPrimenumber(num) {
    if (num == 1 || num == 0)
        return false;

    for (var i = 2; i < num; i++) {

        if (num % i == 0)
            return false;
    }
    return true;
}

console.log(isPrimenumber(123));
console.log(isPrimenumber(59));
console.log(isPrimenumber(6));