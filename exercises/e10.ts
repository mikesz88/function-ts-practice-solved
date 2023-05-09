/**
 * FUNCTIONS E10: Advanced Generic Types and Interfaces
 * Please, make sure te read some docs before you start:
 * @link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * @link https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
 * @link https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
 * =====================================================================================
 * @task
 * Declare an interface of any name with 1 item of 'age' of type 'number'
 * Create a function that works as follows:
 * * The function name is 'personAge' strictly.
 * * The function takes an object of any number of key-values, (the 'age' must be presented) as an argument
 * * The function returns the value of 'age'
 * * Argument types must be annotated with a generic type, that extends the interface, created before
 * * The function return type must be annotated
 * * You can use any type of function syntax!
 * Example: personAge({ id: 1, age: 23 }) => 23;
 * Example: personAge({ name: 'Kevin', age: 41 }) => 41;
 * !!! The function must be exported !!!
 */

// Your code goes here...
interface Age {
  age: number;
}

export const personAge = <T extends Age>(obj: T): number => obj.age;

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
