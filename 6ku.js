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

/* 3. Simple Encryption #1 - Alternating Split

  Description:
    Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

    Examples:
      encrypt("012345", 1)  =>  "135024"
      encrypt("012345", 2)  =>  "135024"  ->  "304152"
      encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

      encrypt("01234", 1)  =>  "13024"
      encrypt("01234", 2)  =>  "13024"  ->  "32104"
      encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

    Together with the encryption function, you should also implement a decryption function which reverses the process.

    If the string S is an empty value or the integer N is not positive, return the first argument without changes.

  My Solution:
    function encrypt(text, n) {
      if (!text || n < 0) return text;
  
      let newText = text;
  
      for (let i = 0; i < n; i++) {
        let odds = [];
        let evens = [];
    
        for (let j = 0; j < newText.length; j++) {
          if (j % 2 === 0) {
            evens.push(newText[j])
          } else {
            odds.push(newText[j])
          }
        }
    
        newText = odds.join("") + evens.join("");
      }
      return newText;
    }

    function decrypt(encryptedText, n) {
      if (!encryptedText || n < 0) return encryptedText;
  
      let newText = encryptedText;
  
      for (let i = 0; i < n; i++) {
        const half = Math.floor(newText.length / 2);
        const odds = newText.slice(0, half).split("");
        const evens = newText.slice(half).split("");
        const mergedHalves = [];
    
        for (let j = 0; j < newText.length; j++) {
          if (j % 2 === 0) {
            mergedHalves.push(evens.shift());
          } else {
            mergedHalves.push(odds.shift());
          }
        }
    
        newText = mergedHalves.join("");
      }
  
      return newText;
    }
*/
