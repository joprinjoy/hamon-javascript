var text = 'Madam'
text = text.toLowerCase()

var length_text = text.length
console.log(length_text);
var reverse_text = ""

for(let i =length_text-1; i>=0;i--)
    {
        reverse_text = reverse_text+text[i]
    }

if (text == reverse_text)
{
    console.log(text,"is PALINDROME")
}
else{
    console.log(text,"is NOT PALINDROME")
}