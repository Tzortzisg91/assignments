const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
//   ["Harrison Ford", "Vladimir Putin"] 
//   ["Singer", "Entertainer"] 
    const occupations = []
    const names = []
 for (i = 0; i < peopleArray.length; i++){
     let people = peopleArray[i]
     names.push(people.name)
    console.log(names)
    occupations.push(people.occupation)
    console.log(people.occupation)
 }
 console.log(occupations) 

 const jobs = []
 for(i = 0; i < peopleArray.length; i += 2){
     let current = peopleArray[i]
     jobs.push(current.name)
        console.log(current)
 }
 console.log(jobs)

 const occu = []
 for (i = 1; i < peopleArray.length; i += 2){
     let newjob = peopleArray[i]
     occu.push(newjob.occupation)
        console.log(newjob)
 }
 console.log(occu)