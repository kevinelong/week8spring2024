// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(inputText) {
    let vowels = ["a","e","i","o","u"]
    // let vowels = "aeiou".split("")
    let count = 0;
    let letters = inputText.split(""); //convert to array
    for(character of letters){
        for(v of vowels){
            if(v === character){
                count++;
            }
        }
    }
    return count;
}

result = getCount("abracadabra")
console.log(result === 5)