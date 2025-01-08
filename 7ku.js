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
