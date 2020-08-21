// Array roperties and Methods

let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

//length
console.log(names.length); // length of array 
console.log(names[names.length -1]); // last array item

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
console.log(allNames.reverse());

//unshift
allNames.unshift('susy'); // adds item to beginning of array
allNames.unshift('anna');
console.log(allNames);

//shift
allNames.shift(); // Removes item from beginning of array
allNames.shift(); // no peramiters are needed
console.log(allNames);

//push
allNames.push('susy'); // adds item to end of array
allNames.push('anna');
console.log(allNames);

//pop
// allNames.pop(); //Removes items from the end of array
// allNames.pop(); // no paramiters needed
// allNames.pop(); 
console.log(allNames);

// splice - mutates original array
const specificNames = allNames.splice(2,3); // the first peramiter slects the item to start with the second peramiter is how many items will be includedj
console.log(specificNames);
console.log(allNames);