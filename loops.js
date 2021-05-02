// 1. Addition
for (let counter = 1; counter < 21; counter++) {
    console.log(counter);
}

// 2. There are i bottles of beer on the wall.

for (let bottlesOfBeer = 1; bottlesOfBeer < 6; bottlesOfBeer++) {
    if (bottlesOfBeer === 1) {
        console.log("There is one bottle of beer on the wall");
    }
    if (bottlesOfBeer === 2) {
        console.log("There are two bottles of beer on the wall");
    }
     if (bottlesOfBeer === 3) {
        console.log("There are three bottles of beer on the wall");
    }
     if (bottlesOfBeer === 4) {
        console.log("There are four bottles of beer on the wall");
    }
     if (bottlesOfBeer === 5) {
        console.log("There are five bottles of beer on the wall")
    }
}

// 3. The odd/even reporter.
for (let oddEven = 0; oddEven < 21; oddEven++) {
    if (oddEven % 2 === 0)
    console.log(oddEven + " is even");
}

// 4. Multiplication Tables.

for (let multiTable = 0; multiTable < 10; multiTable++) {
    console.log(multiTable * 9)
}

// 5. Fizz Buzz
for (let FizzBuzz = 0; FizzBuzz < 100; FizzBuzz++) {
    if ((FizzBuzz % 3 === 0) && (FizzBuzz % 5 === 0))
    console.log("FizzBuzz")
    else if (FizzBuzz % 5 === 0)
    console.log("Buzz")
    else if (FizzBuzz % 3 === 0)
    console.log("Fizz")
    else (
        console.log(FizzBuzz)
    )
} 

// 6. Sum of Multiples

// for (let sumMulti = 0; sumMulti < 1000, sumMulti++) {
//     if (sumMulti % 3 === 0)
// }

//  6 and 9 are multiple of 3
// 20 and 25 are multiple of 5
