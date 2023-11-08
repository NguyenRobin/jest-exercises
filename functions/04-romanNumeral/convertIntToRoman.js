const romanNumeral = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const convertIntToRoman = (num) => {
  let romanOutput = '';

  for (const key in romanNumeral) {
    while (num >= romanNumeral[key]) {
      romanOutput += key;
      num -= romanNumeral[key];
    }
  }
  return romanOutput;
};

/*
Explanation: 

1) Goes throw all key values and checks 
num >= romanNumeral[key] 

2) It finds the first match. our num 8 is greater than 5
while(8 >= 5)

3) romanOutput += key; this is saying 'V' += V

4) num -= romanNumeral[key] this is saying 8 - 5 which is 3

5) Now num is 3 

-------------------------- Now we go back to the while loop. --------------------------

1) Goes throw all key values and checks 
num >= romanNumeral[key] 

2) It finds the first match. our num 3 is greater than 1
while(3 >= 1)

3) romanOutput += key; this is saying 'VI' += I

4) num -= romanNumeral[key] this is saying 3 - 1 which is 2

5) Now num is 2

-------------------------- Now we go back to the while loop. --------------------------

1) Goes throw all key values and checks 
num >= romanNumeral[key] 

2) It finds the first match. our num 2 is greater than 1
while(2 >= 1)

3) romanOutput += key; this is saying 'VII' += I

4) num -= romanNumeral[key] this is saying 2 - 1 which is 1

5) Now num is 1

-------------------------- Now we go back to the while loop. --------------------------

1) Goes throw all key values and checks 
num >= romanNumeral[key] 

2) It finds the first match. our num 1 is equal to 1
while(1 >= 1)

3) romanOutput += key; this is saying 'VIII' += I

4) num -= romanNumeral[key] this is saying 1 - 1 which is 0

5) Now num is 0

-------------------------- Now we go back to the while loop. --------------------------

1) Goes throw all key values and checks 
num >= romanNumeral[key] 

2) our num 0 is not greater or equal to 1 so our while loops ends and returns romanOutput. 

*/

module.exports = convertIntToRoman;
