//Fase 2

var name= "ANDRE3A";
var nameArray=Array.from(name);
var vocals=['A', 'E', 'I', 'O', 'U'];

console.log(`Partim del nom ${name}`);

for(i=0; i<nameArray.length; i++){
  if(isFinite(nameArray[i])){
    console.log(`Els noms de persones no contenen el número: ${nameArray[i]}!!`);
  }
  else{
    if(vocals.includes(nameArray[i])){
      console.log(`He trobat la VOCAL: ${nameArray[i]}`);
    }
    else{
      console.log(`He trobat la CONSONANT: ${nameArray[i]}`);
    }
  }
}
