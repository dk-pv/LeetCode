
// 2455. Average Value of Even Numbers That Are Divisible by Three


var averageValue = function(nums) {
    let output = [];
    for (let i= 0 ; i < nums.length ; i++){
        if((nums[i] % 2 == 0) && (nums[i] % 3 == 0)){
            // values will be 6,12
            output.push(nums[i])
        }
    }
    // output =[6 , 12]
    let sum = 0;
    for (let num of output){
        sum = sum + num;
    }
    // dum = 0 + 6 + 12 = 18
    //output = [] , length = 0
    if (sum == 0){
        return 0
    }
    return Math.floor(sum / output.length);
};
console.log(averageValue([1,3,6,10,12,15]))