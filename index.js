function isPalindrome(word) {
 var reverseWord = word.split("").reverse().join("");
 if(word === reverseWord){
  return true 
 }
 else {
  return false 
 }
  
}

/* 
  Add your pseudocode here
  reverse the word
  if the word equals the reversed word, return true 
  and if they dont equal than return false  

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
