/* 1. No oddities here
  Description:
    Write a small function that returns the values of an array that are not odd.
    All values in the array will be integers. Return the good values in the order they are given.

  My Solution:
    const noOdds = values => values.filter(value => value % 2 === 0);
*/

/* 2. Check the exam
  Description: 
    The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
    The second one contains a student's submitted answers.

    The two arrays are not empty and are the same length. Return the score for this array of answers,
    giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented 
    as an empty string (in C the space character is used).

    If the score < 0, return 0.
    
  My Solution:
    function checkExam(array1, array2) {
      let score = 0;
      for (let i = 0; i<array1.length; i++) {
        if (array2[i] === "") {
          continue;
        } else if (array1[i] === array2[i]) {
          score += 4;
        } else {
          score -= 1;
        }
      }
      return score < 0 ? 0 : score;
    }
*/

/* 3. JavaScript array filter
  Description: 
    JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
    The solution would work like the following:

      getEvenNumbers([2,4,5,6]) // should == [2,4,6]

  My Solution: 
    const getEvenNumbers = numbersArray => numbersArray.filter(number => number % 2 === 0);
*/

/* 4. The coupon code
  Description:
    Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
    Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
    A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

  Examples: 
    checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
    checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

  My Solution:
    function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
      return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
    }
*/

/* 5. Sum of minimums
  Description:
    Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

    For Example:
    [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
    , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
    , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
    ]
    So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

    Note: You will always be given a non-empty list containing positive values.

  My Solution:
    function sumOfMinimums(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += Math.min(...arr[i]);
      }
      return sum;
    }
*/

/* 6. Remove anchor from url
  Description:
    Complete the function/method so that it returns the url with anything after the anchor (#) removed.

    Examples:
      "www.codewars.com#about" --> "www.codewars.com"
      "www.codewars.com?page=1" -->"www.codewars.com?page=1"
  
  My Solution: 
    function removeUrlAnchor(url){
      return url.includes("#") ? url.split("#")[0] : url;
    }
    
  Could have made simpler with:
    function removeUrlAnchor(url) {
      return url.split("#")[0];
    }
*/

/* 7. Is this a triangle?
  Description:
    Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
    (In this case, all triangles must have surface greater than 0 to be accepted).

  Examples:
    Input -> Output
    1,2,2 -> true
    4,2,3 -> true
    2,2,2 -> true
    1,2,3 -> false
    -5,1,3 -> false
    0,2,3 -> false
    1,2,9 -> false 

  My Solution:
    function isTriangle(a,b,c) {
      return a > 0 && b > 0 && c > 0 && 
        a + b > c &&
        a + c > b &&
        b + c > a
    }
*/
