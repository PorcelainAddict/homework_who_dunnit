// var name = 'Jill'
//
// var secretFunction = function() {
//   var pinCode = [0,0,0,0];
//   // console.log('pinCode is:', pinCode);
//   console.log('name inside of function', name);
// }
// //
// secretFunction();
// console.log('name outside secretFunction', name);
// // console.log('pinCode outside of function:', pinCode)
//
// var filterNamesByFirstLetter = function(names, letter){
//   var filteredNames = [];
//   for(let name of names){
//     if(name[0] === letter) {
//       filteredNames.push(name);
//     }
//   }
//   // console.log('name after forLoop:', name); << undefined because now using let as our variable type. i.e. block scoped.
//   return filteredNames;
// }
//
// var students = ["John", "Jack", "Joseph", "Kevin"]
// console.log(filterNamesByFirstLetter(students, "J"));

// let isItFive = function(number){
//   let result;
//   if(number === 5){
//     result = true
//   } else {
//     result = false
//   }
//   return result
// }
// console.log(isItFive(4));
// console.log(isItFive(5));
//
// let temperature = 30;
// if (temperature > 15) {
//   let jacket = false;
//   var happy = true;
// } else {
//   let jacket = true;
//   var happy = false;
// }
// console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);
//
// const calculateEnergy = function(mass){
//   const speedOfLight = 299792458;
//   return mass * speedOfLight ** 2;
// }
//
// let energyOfMe = calculateEnergy(73);
// console.log('energyOfMe is ', energyOfMe);

// const song = {
//   title: 'Raspberry Beret',
//   artist: 'Prince'
// }
//
// console.log('song before mutation', song);
// song.title = "When Doves Cry"
// song.year = 1984
// console.log('song after mutation', song);

const helloWorld = function(){
  result = "Hello World";
};

helloWorld();
console.log(result);
