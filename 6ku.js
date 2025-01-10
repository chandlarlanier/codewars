/* 1. Data reverse
  Description:
    A stream of data is received and needs to be reversed.
    Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
      11111111  00000000  00001111  10101010
      (byte1)   (byte2)   (byte3)   (byte4)
    
      should become:

      10101010  00001111  00000000  11111111
      (byte4)   (byte3)   (byte2)   (byte1)

    The total number of bits will always be a multiple of 8.

    The data is given in an array as such:
      [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

    My Solution:
      function dataReverse(data) {
        let result = [];
        while(data.length) {
          result.push(...data.splice(-8));
        }
        return result;
      }
*/

/* 2. Consonant value
  Description:
    Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
    We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

    For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"
      "zodiac" -> 26
      The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

      "strength" -> 57
      The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

  My Solution: 
    function solve(s) {
      let sArray = s.toLowerCase().split("");
      sArray = sArray.map(char => /[aeiouAEIOU]/.test(char) ? ' ' : char);

      let value = 0;
      let values = [];
      for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === " ") {
          continue;
        }

        value += sArray[i].charCodeAt(0) - 96;

        if (sArray[i+1] === " " || i === sArray.length - 1) {
          values.push(value);
          value = 0;
        }  
      }

      return Math.max(...values);
    };
*/
