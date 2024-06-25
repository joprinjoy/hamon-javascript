const alphabt = "abcdefghijklmnopqrstuvwxyz"

//var input_string = "A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once. Pangrams have been used to display typefaces, test equipment, and develop skills in handwriting, calligraphy, and typing."
var input_string = "the five boxing wizards jump quickly"
var flag 
for(let indx_of_alphabet=0;indx_of_alphabet<alphabt.length;indx_of_alphabet++)
{
    //checking whether the alphabet is there in the input string
    if  (input_string.includes(alphabt[indx_of_alphabet]))
        flag = true
    else
        flag = false

}

console.log(flag == true?"Pangram":"not pangram")
    

