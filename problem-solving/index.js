function findLargestNum(arr){
    let biggest = 0;
    // for loop
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > biggest) {
          biggest = arr[i]; 
          // console.log(i)
        }
    }
    return biggest;
}

 console.log(findLargestNum([3, 5, 2, 8, 1]))