let digits = [2,4,5,6,8,1,7]
let digit_sorted = digits.sort((a,b)=>{
    return b - a
})
console.log("Second Largest Number in array:", digit_sorted[1])