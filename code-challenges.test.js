// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibFunc", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    let outPut1 = [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    let outPut2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibFunc(fibLength1)).toEqual(outPut1)
    expect(fibFunc(fibLength2)).toEqual(outPut2)
  })
})
// test 1 - ReferenceError: fibFunc is not defined
// test 2 - pass

// b) Create the function that makes the test pass.
  // create function called fibFunc
  // give fibFunc parameter of number
  // within function, create new array with values of 1 and 1 (required to start sequence)
  // within function, create for loop letting i start at 2 and stopping iteration when i reaches number
  // within for loop, generate new values during iteration which are the sum of the previous two values
  // return the array to display sequence up to given length

const fibFunc = (number) => {
  let arr = [1, 1]
  for (let i = 2; i < number; i++) {
    arr[i]=arr[i - 2] + arr[i - 1]
  }
  return arr
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("smallToBig", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    let outPut1 = [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    let outPut2 = [10, 15, 20, 45, 60, 65, 100]
    
    expect(smallToBig(studyMinutesWeek1)).toEqual(outPut1)
    expect(smallToBig(studyMinutesWeek2)).toEqual(outPut2)
  })
})
// test 1 -    ReferenceError: smallToBig is not defined
// test 2 -   Pass


// b) Create the function that makes the test pass.
  //create function named smallToBig
  //give function parameter of "object"
  // within function, return the object passed through the Object.values built in method to return values as an array, and use .sort built in method to organize numbers smallest to largest.
    // use compare function within .sort to arrange numeric values.

const smallToBig = (object) => {
  return Object.values(object).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arrSum", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    let outPut1 = [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    let outPut2 = [250, 161, 261, 165]
    const accountTransactions3 = []
    let outPut3 = []

    expect(arrSum(accountTransactions1)).toEqual(outPut1)
    expect(arrSum(accountTransactions2)).toEqual(outPut2)
    expect(arrSum(accountTransactions3)).toEqual(outPut3)
  })
})
// test 1 -    ReferenceError: arrSum is not defined
// test 2 -    undefined
// test 3 -    NaN
// test 4 -    Pass


// b) Create the function that makes the test pass.
  // create function named arrSum
  // give function parameter of arr 
  // within function, create for loop starting at index 1 and ceasing iteration at length of arr
  // within loop, set current index to equal the sum of the current index and the previous index
  // return arr
    //NOTE: multiple attempts to utilize .map built in method were made, some kept commented out from some point in their test cycle below. The last one performs the desired function, but was learned through online resources and I don't yet fully understand the syntax.
      // further note: I have a hunch .map isn't working because there is no previous value for it to read to compare to the 0 indexed element. In the end to save time I decided another for loop is easier while I research better tools and syntax.


const arrSum = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i-1]
  }
  return arr
}

// const arrSum = (arr) => {
//   return arr.map((value, index) => {
//      return value = value[index] + value[index-1]
//   })
// }

// const arrSum = (arr) => {
//   let newArr = []
//    arr.map((value, index) => {
//      newArr.push(value[index] = value[index] + value[index - 1])
//   })
//   return newArr
// }

// const arrSum = (arr) => {
//   return arr.map((sum => value => sum+=value)(0))
// }


