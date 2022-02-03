function isPalindrome(word) {
  // Write your algorithm here
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; //forward character
    let y = str[j - i]; //backward character
    if (x != y) {
      // return false if string not match
      return false;
    }
  }
  /// return true if string is palindrome
  return true;
}

/* 
  Add your pseudocode here
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
