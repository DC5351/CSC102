function isPalindrome(strToTest){
    /*replace(/\s/g, "") removes all of the spaces in the string 
    then convert all of the letters to lowercase
    */
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    /*
    trun the string into an array, reverse the contents of the array 
    turn the array back into a String
    */
    var strREv = strCleaned.split("").reverse().join("");

    return strREv == strCleaned;
}
/*false
console.log(isPalindrome("abcd"));

//true
console.log(isPalindrome("radar"));

// true (with punctuation)
console.log(isPalindrome("A man a plan a canal Panama"));
*/

var bContinue = true;
do{
    //get a word from the user 
    var userInput = prompt("Enter a word to test if it is a palindrome: ");

    //test the word with our function
    var ispalin = isPalindrome(userInput);
    var message = "";

    //create a message based on whether the word was a palindrome or not 
    if (ispalin){
        message = userInput + " is a palindrome!";
    }
    else{
        message = userInput + " is not a palindrome!";
    }

    //show the message to the user
    alert(message);

    //ask the user if they want to test another word 
    var answer = prompt("Do you want to contine? (y/n) ")

    //if no, set the boolean to false to exit out of the do while loop
    if (answer.toLocaleLowerCase() == "n"){
        bContinue =false;
    }

}while(bContinue);
