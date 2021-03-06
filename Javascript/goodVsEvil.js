/*
Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.
The first parameter will contain the count of each race on the side of good in the following order:
Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:
Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
*/
function goodVsEvil(good, evil){
    good = good.split(' ')
    evil = evil.split(' ')
  
    let goodVals = {1 : 1, 2: 2, 3 : 3, 4 : 3, 5 : 4, 6 : 10}
    let evilVals = {1 : 1, 2: 2, 3 : 2, 4 : 2, 5 : 3, 6 : 5, 7 : 10}
    let goodScore = 0
    let evilScore = 0
  
    good.forEach( (raceCount, i) =>{
      i+=1
      for (let c = 0; c < raceCount; c++){
        goodScore += goodVals[i]
      }
  
    })
    evil.forEach( (raceCount, i) =>{
      i+=1 //offset
      for (let c = 0; c < raceCount; c++){ //How many warriors?
        evilScore += evilVals[i] //Adds warrior value
      }
    })
  
    return (goodScore > evilScore) ? "Battle Result: Good triumphs over Evil" : (goodScore < evilScore) ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field"
    //^ returns the winner based on the score of each sire
  }