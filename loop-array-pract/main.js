// let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer","lamp","stapler","computer", "computer"]
// console.log(officeItems)

// function computerCount (arr){
//     let count = 0


//     for (let i = 0; i < arr.length; i++){
      
    
//         if ( arr[i] === "computer"){
//             count+= 1 
//         }
        
//     }
//     console.log("i found " + count + " computers")
// }

// computerCount(officeItems)






let peopleWhoWantToSeeMadMaxFuryRoad = [
   
    {name: "Mike", age: 12, gender: "male"},
    {name: "Madeline", age: 80, gender: "female"},
    {name: "Cheryl", age: 22, gender: "female"},
    {name: "Sam" , age: 30 , gender: "male"},
    {name: "Suzy", age: 4, gender: "female"},
]
  console.log(peopleWhoWantToSeeMadMaxFuryRoad)
   
        for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
                let current = peopleWhoWantToSeeMadMaxFuryRoad[i]
                if (current.age > 18){
                    console.log( current.name, " is old enough")
                }
                else {
                    console.log(`${ current.name} is not old enough`)
                }
                console.log(current.age)
   }
    


