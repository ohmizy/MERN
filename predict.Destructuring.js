const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//Prediction I am adjusting back to Javascript from Python.
//Console logs Tesla Mercedes because [randomCar] = Tesla and then the , skips and otherRandomCar = Mercedes

const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//Prediction Elon
//Name is not defined

const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//Prediction 12345 undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second);
console.log(first == third);

//Prediction 5 2
//True and False == is comparing the two numbers, so it is basically saying 2 = 5 which is false and 2 = 2 which is true 

const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // value
const { secondKey } = lastTest; //[1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; 
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]); //1 
console.log(willThisWork);
//Prediction value [1,5,1,8,3,3] 1 
//Output value [1,5,1,8,3,3] 1 5
