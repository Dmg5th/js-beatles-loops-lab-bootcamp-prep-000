function theBeatlesPlay(musician, axe){
  let newArr = [];
  for(let i = 0; i < musician.length; i++){
    newArr.push(`${musician[i]} plays ${axe[i]}`);
  }
  return newArr
}



function theBeatlesPlay(player, instrument){
  let newArr = [];
  for(let i = 0; i <player.length; i++){
    newArr.push(`${player[i]} plays ${instrument[i]}`)
  }
  return newArr;
}

function johnLennonFacts(facts){
  let newArr = [];
  let i = 0;
  while(i < facts.length) {
    newArr.push(`${facts[i]}!!!`);
    }
  return newArr;
}




























