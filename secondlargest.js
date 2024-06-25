let digits = [2,4,5,6,8,1,7]
//converting to set type to remove duplicates
digits = new Set(digits)
// converting from set type to array type
digits = Array.from(digits)
//sorting the array in descending order using arrow function
let digit_sorted = digits.sort((a,b)=>{
    return b - a
})
console.log("Second Largest Number in array:", digit_sorted[1])