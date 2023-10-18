//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(phrase, names){
    //Your code goes here
    for (let x of names) {
        var re =  new RegExp(x);
        let result = phrase.match(re);
        if (result != null) {
            console.log("Matched dog_name");
        } else {
            console.log("No Matches");
        }

    }
}

//Call method here with parameters
findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    let i = 0;
    while (i < (arr.length - 1)) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
        i++;
    }
    console.log(arr);
}

replaceEvens(Given_arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// CODEWARS Refactors

//There is a bus moving in the city which takes and drops some people at each bus stop.
//You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
//Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
//Take a look on the test cases.
//Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
//The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
    let count = 0;
    for (let stops of busStops) { //loop thru stops in bus stops
      let stop_count = stops[0] - stops[1]; //calc the net num of passengers remaining at stop
      count += stop_count; //add the net to prev remaining passengers
    }
    return count;
  }



//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
//For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    // Add your code here
    let newList = s.toLowerCase(); //convert string to lowercase
    newList = newList.split(''); // string to array
    let capList = s.split(''); // orginal string to array 
    let counter = 0;            //
    for (let x of newList) {
        for (let y of newList) {
            if (x == y) { //if letter in array, incr counter
                counter += 1;
            }
        }
        if (counter <= 1) {  //if count less than 1 auto match
            if (capList.includes(x.toUpperCase())) { //if capital letter in org. list
                return x.toUpperCase(); //return uppercase
                } else {
                  return x; //return lowercase
                }
              }
        counter = 0
            
    }
    return '';
}


//Write a function that will return the count of distinct case-insensitive alphabetic
//characters and numeric digits that occur more than once in the input string. The input
//string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    console.log(text);
    var textList = text.toLowerCase().split('');
    //console.log(textList);
    let counter = 0;
    let finalCount = 0;
    let preExs = [];
    for (let letter of textList) {
        if (!preExs.includes(letter)) {
            for (let comp of textList) {
                if (letter == comp) {
                    counter ++;
                }
            }
            if (counter > 1) {
                finalCount += 1;
                preExs.push(letter);
                console.log(preExs);
            }
        }
        counter = 0;
    }
    
    return finalCount
}


//Write a simple parser that will parse and run Deadfish.
//Deadfish has 4 commands, each 1 character long:
//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//Invalid characters should be ignored.
function parse( data ){
  var comList = data.split('');
  //console.log(comList);
  let i = 0;
  let x = 0;
  let output = [];
  comList.forEach((element) => {
    if (element == 'i'){
      x += 1;
    }
    if (element == 'd'){
      x -= 1;
    }
    if (element == 's'){
      x = x**2;
    }
    if (element == 'o'){
      output.push(x);
    }
  });
  //console.log(x);
  return output;
}