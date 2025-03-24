var maxDepth = function(s) {
    let count = 0;
    let depth = 0;

    for(let i =0 ; i < s.length ; i++){  // loop thru input string
        if(s[i] === "("){ // check if element is (
            count += 1  // increment count if so
            depth = Math.max(depth , count) // add to depth
        }else if(s[i] === ")"){  // check if element is )
            count -= 1   // increment count if so
        }
    } 
    return depth 
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
