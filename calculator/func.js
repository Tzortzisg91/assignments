// function sum(num1, num2){
// return num1 + num2
// }

// sum(10,5)
// let result = sum(10,5)
// console.log(result)

function largestNumber(e){
    let num = 0;
    for (let i = 0; i < e.length; i++){
        if (e[i] >= num){
            num = e[i]
        }
    }
    return num;
}

let arr = [3,8,9];
console.log(largestNumber(arr))

function largeNum(e){
    let num = 0;
    for (let i = 0; i <e.length; i++){
        if (e[i] >= num){
            num = e[i]
        }
    }
    return num;
}

let arr = [25,-10,10];
console.log(largerNumber(arr))