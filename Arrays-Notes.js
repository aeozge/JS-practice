// most used array
const numberOfArray = [1, 2, 3, 4];
console.log('array : ' ,numberOfArray);

//create an array with constructor function
const moreNumber = new Array('Hi', 'Welcome');
console.log(moreNumber);

//create an array with 4 empty indexes
const numberOfArray1 = new Array(4);
console.log(numberOfArray1);

//usage of Array.of
const numberOfArray2 = Array.of(3, 4, 5, 6);
console.log('Arrayof :', numberOfArray2);

/****************************************************************************************************************************************** */

//create an array of splitting a string
let greet = "hello world" //it will create space as an empty
const splitString = Array.from(greet);

//add new value to the splitted string array
splitString.push('W');
splitString.push('!');

//add element in the first index then moved others to the next ones
splitString.unshift('W');

//it removes the first index element
splitString.shift()
console.log('Arrayfrom :', splitString);

/****************************************************************************************************************************************** */


//create a hobbies array
const hobbies = ['Cooking', 'Hiking', 'Coding'];
hobbies.push('Reading');

//add new element at index 3
//splice(indexNum, deleteNumber, string)
hobbies.splice(3, 0, 'Painting');

console.log('full array :' , hobbies)

//deleted 3 elements and added new element at index 1
hobbies.splice(1, 3, 'Driving');
console.log(hobbies);

/****************************************************************************************************************************************** */

//slice returns new array based on the old array
//slice also selecting ranges an array 
//slice(startNumber, endNumber)
const testSlice = [1, 2.5, -9, 34.6, 7, 23];
const storedSlice = testSlice.slice(2, 4);
console.log('slice example :', testSlice.slice());
console.log(storedSlice);

/****************************************************************************************************************************************** */

//concat combine two arrays into the existing one
const numbers = [1, 3, 5, 7, 9];
const fruits = ['grape', 'kiwi', 'cherry'];
console.log('concat fruits into numbers :', numbers.concat(fruits));

//indexOf find out at which index in that array
console.log('indexOf :', fruits.indexOf('cherry'));

//includes() checks if it's exist in the array or not
console.log('Includes :', fruits.includes('apple'));

/****************************************************************************************************************************************** */

//find() and findIndex()
const daysData = [{day : 'Monday'}, {day : 'Tuesday'}, {day : 'Wednesday'}, {day : 'Thursday'}, {day : 'Friday'}];
const found = daysData.find((weekday, idx, days) => {
    return weekday.day === 'Wednesday';
});
//found.day = 'Sunday';

const foundIndex = daysData.findIndex((weekday, idx, days) => {
    return weekday.day === 'Wednesday';
});

console.log('found day :', found);
console.log(found, daysData);
console.log('found index :', foundIndex);

/****************************************************************************************************************************************** */

//forEach() method (value, index, array)

const prices = [10.99, 3.99, 89.95, 7.59, 54.95];
const tax = 0.19;
const taxadjustPrices = [];

/*for(const price of prices){
    taxadjustPrices.push(price * (1 + tax));
}
*/

prices.forEach((price, idx, prices) => {
    const priceObj = {index :idx, taxAdjPrice : price * (1 + tax)};
taxadjustPrices.push(priceObj);

});

console.log('adjust tax price with forEach :', taxadjustPrices);

//map()  transform an array to a new brand array by making changing elements

const taxAdjPriceMap = prices.map((price, idx) => {
    const ObjPrice = {index : idx, taxPrice : price * (1 + tax)};
    return ObjPrice;
});

console.log('original prices :', prices, 'adjust tax price with map :', taxAdjPriceMap);


/*const mynumber = [10, 30, 50, 70];
const numberby3 = mynumber.map((divide, idr) => {
    const change = {index : idr, divider : divide / 3}
    return change;
})
console.log('deneme number by 3 : ', numberby3) */

//prices.sort() not sorted correctly
//need to compare two parameters and sort it.
const sortedPrices = prices.sort((a, b) => {
    if(a > b){
        return 1;
    }else if(a === b){
        return 0;
    }else{
        return -1;
    }
})
console.log('sorted array :', sortedPrices)
console.log('reversed sorted array :', sortedPrices.reverse());

//filter()
const filteredArray = prices.filter((price) => {
    return price > 10;
});
console.log('filter prices greater than 10', filteredArray)

//reduce()
let sum = 0;
prices.forEach(price => sum += price);
console.log('sum of prices', sum)

const fruitBasket = ['banana', 'apple', 'cherry', 'orange', 'fig', 'banana', 'watermelon', 'cherry'];
const count = fruitBasket.reduce((tall, fruit) => tall + " " + fruit, 'all fruits are in basket :');
console.log('count fruits in basket :', count)

console.log([2, 4, 8].reduce((a, b) => a + b, 5))

/****************************************************************************************************************************************** */

//string methods : 
//split(): split a string into array 
const data = 'kansas,03,2022';
const transformData = data.split(',');

console.log('split by , : ', transformData);

//and join()
const nameFragments = ['Harry', 'Potter'];
const name1 = nameFragments.join(' ');
console.log('join() :', name1);

/****************************************************************************************************************************************** */

console.log('spread operator :' ,Math.min(...prices));

console.log('prices :', prices);
const copiedPrices = [...prices];
console.log('copied prices :',copiedPrices);

prices.push(105);
console.log('prices after added new :', prices, 'copied prices after added new :', copiedPrices);

/****************************************************************************************************************************************** */

//Array destructring
const nameData = ['Harry', 'Potter', 'Mr', 36, 'England'];
//const firstName = nameData[0];

const [firstName, lastName, age, ...otherInfo] = nameData;
console.log(firstName, lastName, otherInfo);

/****************************************************************************************************************************************** */

//find min and max value from an array
const findArray = [22, 41, 5, 62, 97, 111];

console.log('max :', Math.max(...findArray));

function findMinMax(...nums){ //rest operator
    let curMax = nums[0];
    let curMin = nums[0];

    for(const num of nums){
        if(num > curMax){
            curMax = num;
        }else if(num < curMin){
            curMin = num;
        }
    }
    return [curMin, curMax];
}
const [min, max] = findMinMax(...findArray); //spread operator
console.log('minimum value :', min,'maximum value :', max);