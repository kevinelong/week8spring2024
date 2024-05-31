function pairs(text){
    const letters = [...text]; //convert to array
    const output = [];
    for(i=0; i< letters.length; i+=2){ //every other  +=2
        if(i == letters.length - 1){ //last one might be special
            output.push(letters[i] + "_")
        }else{
            output.push(letters[i] + letters[i+1])
        }
    }
    return output;
}

console.log(pairs("abcde")) // === ["ab", "c_"]