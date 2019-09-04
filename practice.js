var animal = 'dog';
 
function makeZoo() {
  var animal = 'cat';
 
  console.log(`I think I'll put this ${animal} in the zoo.`);
}
 
makeZoo(); // "I think I'll put this cat in the zoo."
 
animal // "dog"