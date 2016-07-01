function randomNumber(){
  return Math.floor(Math.random() * 720 + 1);
}

function isUnique(set, character){
  return set.indexOf(character) === -1
}

exports.randomNumber = randomNumber;
exports.isUnique = isUnique;
