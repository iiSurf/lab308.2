// variable and value for pi.
const Pi = (22/7);
// area of the circle
const radius = 5; //5 metres
const area = (Pi * radius * radius); // (22/7) * 5 * 5
console.log(area);
// Each plant requires a minimum space of 0.8 square meters.
let plantArea = 0.8; // 0.8 square meters
// The area is starting with 20 plants.
let plants = 20;
// The plants double in number every week.
let x = 10; 
// x is the number of weeks and is any positive value as we are seeing current amount of plants and future prediction.
const maximumAmountOfPlants = area / plantArea;
console.log(maximumAmountOfPlants);
console.log((plants * 2) * x); // each week population of plants
// each week, the population with respect ot the total area the plants cover.
// plantPop is Plant Population
let plantPop = (((plants * x) * 2) * 0.8 );
// All tests passed and ready to rock and roll
// TODO: Part 1

// TODO: 1) Predict the plant growth after a specific number of weeks.

// After 1 week the plant population will be 40 plants
const plantsOneWeek = Math.pow(2, 1);
console.log(plantsOneWeek);

// After 2 weeks the plant population will be 80 plants
const plantsTwoWeek = Math.pow(2, 2);
console.log(plantsTwoWeek);
// After 3 weeks the plant population will be 120 plants
const plantsThreeWeek = (plantsTwoWeek * plantArea) / area;
console.log(plantsThreeWeek);

const weekThreeCapacity = (plantsThreeWeek * plantArea) / area;
console.log(weekThreeCapacity);


// TODO: 2) Pruned, to stop them from exceeding the capacity of the garden. This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

console.log(plantPop);

console.log(area);

if (plantPop > ((0.8) * area)) {
    console.log(`Will exceed the capacity of the garden`);
} else {
    console.log(`Will not exceed the capacity of the garden`);
}

// TODO: Monitored, if they are growing at an acceptable rate. This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

if (plantPop >= (area * 0.5) && (plantPop <= (area * 0.8))) {
    console.log(`The plants are growing at an acceptable rate.`);
} else {
    console.log(`Plants are not growing at an acceptable rate.`);
}

// TODO: Planted, if there is room to plant more plants. This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

if (plantPop < (area * 0.5)) {
    console.log(`There is room to plant more plants.`);
} else {
    console.log(`There is no more room to plant more plants.`);
}

// 3) Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

// After one week:
//  Will Exceed the capacity of the garden
// Plants are not growing at an acceptable rate.
// There is room to plant more plants.
// -------------------------------------------------------------
// After two weeks:
// Will not exceed the capacity of the garden
// Plants are not growing at an acceptable rate.
// There is no more room to plant more plants.
// ------------------------------------------------------------
// After three weeks:
// Will not exceed the capacity of the garden
// Plants are not growing at an acceptable rate.
// There is no more room to plant more plants.
// ------------------------------------------------------------
// TODO: Part 2

let newPlantPop = plantPop * 5;
console.log(newPlantPop); // test
console.log(plantPop); // test
// After 1 week the plant population that started from 20 plants grows from 20 plants to 32 plants. TEST
// After 1 week the plant population that started at 100 plants grows from 100 plants to 160 plants. TEST

// After 10 weeks the new plant population of 100 plants to start with grew to 1,600 plants.

console.log((0.8) * area);
// area for 20 plants takes up 62.85714285714286 sq m of space.

console.log((62.85714285714286) * 1600);
// Area required is 100571.42857142858 sq meters for 1,6000 plants.

// TODO: Part 3

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden. Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

const radiusPart3 = 5;
const minimumPlantArea = 0.8;
let plantsPart3 = 100;
let n = 10;
const areaPart3 = (22/7) * radiusPart3 * radiusPart3;

let spaceRequired = plantsPart3 * minimumPlantArea;

try {
    if ( spaceRequired > areaPart3) {
        throw new Error(`Not enough space`);
    }
    console.log(`Plants have enough space.`);
}   catch (error) {
        console.log(error.message);
    }