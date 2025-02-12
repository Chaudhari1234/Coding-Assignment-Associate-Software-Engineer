function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(" ");
}


let sentence = "This is a sunny day";
console.log(reverseWords(sentence));  
