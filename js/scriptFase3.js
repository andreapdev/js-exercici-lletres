
//Fase 3

var name= "ANDREA";
var nameArray=Array.from(name);

function letterCount(lletra){
  var suma=0;
  for(i=0; i<nameArray.length;i++){
    if(nameArray[i]==lletra){
      suma++;
    }
  }
  return suma;
}

function joinLetters(lletra){
  var joined=[lletra, letterCount(lletra)].join(": ");
  return joined;
}

var nameMap= nameArray.map(joinLetters);

console.log(nameMap);

