// 1952. Three Divisors





var isThree = function(n) {
    let divisorCount = 2;

    for(let i=2 ; i <= Math.sqrt(n) ; i++){
        if(n % i == 0){
            let firstFactor = i;
            let secondFactor = (n / i);
            if (firstFactor == secondFactor){
                divisorCount++ ; 
            }else {
                divisorCount = divisorCount + 2;
            }
        }
        if (divisorCount == 3){
            return true
        }
    }
    return divisorCount == 3;
};
console.log(isThree(2))