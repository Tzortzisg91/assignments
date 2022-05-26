function getNumberOfVowels(str) {
    let vowels = ["a","e","i","o","u"]
    let counter = 0
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i]))
        counter++;
        // console.log(str[i])
    }
    return counter
}
console.log(getNumberOfVowels("hello world")) // 3
console.log(getNumberOfVowels("fishing")) // 2

console.log(getNumberOfVowels("gaming computer"))