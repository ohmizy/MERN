console.log(hello);
var hello = 'world';

// Prediction at console.log. Will be undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Prediction undefined because lines of code are not in order
// Wrong the function gets hoisted to the top so it console.logs "magnet"

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Prediction console log "only okay"
// Wrong console logs "super cool" because it never calls on the function print. The function does get hoisted to the top tho.

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//Prediction "half chicken, gone, chicken"
//Wrong the function goes to the top of whatever it has a relationship with. Not on top of the whole thing. With that being said it console.logs chicken and half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Prediction Error because it sets mean = function and then calls upon mean. 

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//Prediction "disco" "rock" "r&b"
//Wrong it is undefined rock r&b diso. disco does not run because console.log cannot come before it. genre isn't defined giving us undefined as our first output

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Prediction san jose seattle burbank
//It Runs it San Jose one more time, so the correct answer would be San Jose seattle burbank and san jose again