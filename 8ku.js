/* Fundamentals: Return
  Description: 
    Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

    Please use the following function names:
      addition = add
      multiply = multiply
      division = divide (both integer and float divisions are accepted)
      modulus = mod
      exponential = exponent
      subtraction = subt

      Note: All math operations will be: a (operation) b

  Solution: 
    const add = (a, b) => a + b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    const mod = (a, b) => a % b;
    const exponent = (a, b) => a ** b;
    const subt = (a, b) => a - b;
*/

/* What's the real floor?
  Description:
    Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
    Write a function that given a floor in the american system returns the floor in the european system.
    With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
    Basements (negatives) stay the same as the universal level.

  Examples: 
    1  =>  0 
    0  =>  0
    5  =>  4
    15  =>  13
    -3  =>  -3

  My Solution: 
    const getRealFloor = (n) => {
      if (n <= 0) {
        return n;
      } else if (n <= 13) {
        return n - 1;
      } else {
        return n - 2;
      }
    }
    
  Best Solution: 
    const getRealFloor = (n) => n > 13 ? n - 2 : n > 0 ? n - 1 : n;
*/
