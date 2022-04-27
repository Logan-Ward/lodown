'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the value passed into the function unchanged.
 * @param { any value } value: Function takes in any value.
 * @return { any value } Function returns input value unchanged.
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Takes in a value and returns the value's data type.
 * @param { any value } value: Fuction takes in any value. 
 * @return { string } Function returns a string of the input value's data type.
 */
 function typeOf(value){
    if(Array.isArray(value)){
        return 'array';
    }
    if(value === null){
        return 'null';
    }
    return typeof value;
}
module.exports.typeOf = typeOf;

/**
 * first: A function that returns the first amount of a given number of items in an array.
 * @param { array } array: Function takes in an array. 
 * @param { number } num: Function takes in a number.
 * @return { array }: Function return an array of the given length from the original array.
 */
function first(array, num){
    let newArray = [];
    if(!Array.isArray(array)){
        return [];
    }

    if(typeof num !== 'number' || num === undefined){
        return array[0];
    }
    if(num <= 0){
        return [];
    }
    if(num > array.length - 1){
        return array;
    }
    for(let i = 0; i < num; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports.first = first;

/**
 * last: A function that returns the last amount of a given number of items in an array
 * @param { array } array: Function accepts an array.
 * @param { number } num: Function accepts a number.
 * @return { array }: Function returns an array of the given length from the original array.
 */
 function last(array, num){
    let newArray = [];
    if(!Array.isArray(array)){
        return [];
    }

    if(typeof num !== 'number' || num === undefined){
        return array[array.length - 1];
    }
    if(num <= 0){
        return [];
    }
    if(num > array.length - 1){
        return array;
    }
    for(let i = 0; i < num; i++){
        newArray.unshift(array[array.length - i - 1]);
    }
    return newArray;
}
module.exports.last = last;

/**
 * indexOf: A fucntion that returns the index of the first occurence of a value in an array.
 * @param { array } array: Function accepts an array.
 * @param { any value } value : Function accepts any value
 * @return { number }: Function returns the index of the given value in the array.
 */
 function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: A function that returns true or false depending on whether the given value is in the array.
 * @param { array } array: Function accepts an array.
 * @param { any value } value: Function accepts any value.
 * @return { boolean }: Function returns a boolean depending on whether the value was in the array.
 */
 function contains(array, value){
    let veracity = false;
    for(let i = 0; i < array.length; i++){
        array[i] === value ? veracity = true  : null
    }
    return veracity;
}
module.exports.contains = contains;

/**
 * each: Calls a given function on each element of a collection.
 * @param { collection } item: Function accepts a collection.
 * @param { function } action: Function accepts a function.
 */
 function each(item, action){
    if(Array.isArray(item)){
        for(let i = 0; i < item.length; i++){
            action(item[i], i, item);
        }
    }
    else{
        for(let i in item){
            action(item[i], i, item);
        }
    }
}
module.exports.each = each;

/**
 * unique: A function that accepts an array then returns it with all duplicate values removed.
 * @param { array } array: Function accepts an array.
 * @return { array }: Function returns an array with duplicate values removed.
 */
 function unique(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(newArr, array[i]) === -1){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports.unique = unique;

/**
 * filter: A function that calls a given function on every element in a collection 
 * and returns an array of the elements that returned true.
 * @param { array } array: Function accepts an array.
 * @param { function } test: Function accepts a function. 
 * @return { array }: Function returns an array of the elements that returned true.
 */
 function filter(array, test){
    let newArr = [];
    _.each(array, function(val, index, arr){
        if(test(val, index, arr)){
            newArr.push(val);
        }
    })
    return newArr;
}
module.exports.filter = filter;

/**
 * reject: A function that calls a function on each element of the array and returns 
 * an array of the elements that returned false.
 * @param { array } array: Function accepts an array. 
 * @param { function } test: Function accepts a function.
 * @return { array }: Function returns an array of elements that returned false.
 */
 function reject(array, test){
    let newArr = [];
    _.each(array, function(val, index, arr){
        if(!test(val, index, arr)){
            newArr.push(val);
        }
    })
    return newArr;
}
module.exports.reject = reject;

/**
 * partition: A function that runs a given function on each element of an array and returns 
 * an array with two sub arrays of the elements that returned true and false respectively.
 * @param { array } array: Function accepts an array. 
 * @param { function }  test: Function accepts a function.
 * @return { array }: Function returns an array with two sub arrays of the elements that 
 * returned true and false respectively.
 */
 function partition(array, test){
    let trueArr = [];
    let falseArr = [];
    _.each(array, function(val, index, arr){
        if(test(val, index, arr)){
            trueArr.push(val);
        } 
        else{
            falseArr.push(val);
        }
    })
    return [trueArr, falseArr];
}
module.exports.partition = partition;

/**
 * map: Passes all of the elements in a collection through a function than returning an array of the resulting elements.
 * @param { collection } item: Function accepts a collection.
 * @param { function } func: Function accepts a function
 * @return { array }: Function returns an array of the altered elements.
 */
 function map(item, func){
    let newArr = [];
    if(Array.isArray(item)){
        for(let i =0; i < item.length; i++){
            newArr[i] = func(item[i], i, item);
        }
    }
    else{
        let count = 0;
        for(let i in item){
            newArr[count] = func(item[i], i, item);
            count++;
        }
    }
    return newArr;
}
module.exports.map = map;

/**
 * pluck: Returns an array of the given property for each of the objects in the given array.
 * @param { array } array: Function accepts an array. 
 * @param { string } prop: Function accepts a string.
 * @return { array }: Function returns an array of the specified properties from the given objects.
 */
 function pluck(array, prop){
    let myArr = _.map(array, function(value, property, arr){
        for(let i in value){
            if(i === prop){
                return value[i];
            }
        }
    })
    return myArr;
}
module.exports.pluck = pluck;

/**
 * every: Calls the given function on elements of the given collection and returns 
 * true only if all elements return true.
 * @param { collection } item: Function accepts a collection. 
 * @param { function } func: Function accepts a function.
 * @return { boolean }: Function returns a boolean of true if all elements returned 
 * true or false otherwise. 
 */
 function every(item, func){
    if(Array.isArray(item)){
        if(func === undefined){
            for(let i = 0; i < item.length; i++){
                if(!item[i]){
                    return false;
                }
            }
        }
        else{
            for(let i = 0; i < item.length; i++){
                if(!func(item[i], i, item)){
                    return false;
                }
            }
        }
    }
    else{
        if(func === undefined){
            for(let i in item){
                if(!item[i]){
                    return false;
                }
            }
        }
        else{
            for(let i in item){
                if(!func(item[i], i, item)){
                    return false;
                }
            }
        }
    }
    return true;
}
module.exports.every = every;

/**
 * some: Calls the given function on elements of the given collection and returns 
 * false only if all elements return false.
 * @param { collection } item: Function accepts a collection. 
 * @param { function } func: Function accepts a function.
 * @return { boolean }: Function returns a boolean of false if all elements returned 
 * false or true otherwise. 
 */
 function some(item, func){
    if(Array.isArray(item)){
        if(func === undefined){
            for(let i = 0; i < item.length; i++){
                if(item[i]){
                    return true;
                }
            }
        }
        else{
            for(let i = 0; i < item.length; i++){
                if(func(item[i], i, item)){
                    return true;
                }
            }
        }
    }
    else{
        if(func === undefined){
            for(let i in item){
                if(item[i]){
                    return true;
                }
            }
        }
        else{
            for(let i in item){
                if(func(item[i], i, item)){
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Calls the given function on every element of a collection and 
 * uses each result in the next function call, with the first function 
 * call using the seed value. Returns the final function call's result.
 * @param { array } array: Function accepts an array. 
 * @param { function } func: Function accepts a function.
 * @param { number } seed: Function accepts a number.
 * @return { number }: Function returns the result of the consecutive function calls.
 */
 function reduce(array, func, seed){
    let previous;
    if(seed === undefined){
        previous = array[0]
        for(let i = 1; i < array.length; i++){
            previous = func(previous, array[i], i);
        }
    }
    else{
        previous = seed;
        for(let i = 0; i < array.length; i++){
            previous = func(previous, array[i], i);
        }
    }
    return previous;
}
module.exports.reduce = reduce;

/**
 * extend: Accepts an indeterminate number of objects and copies all of their 
 * properties to the first object in the order they were passed in, then returns 
 * the updated first object.
 * @param { ...objects } objects: Function accepts an indterminate number of objects. 
 * @return { object }: Function returns the updated first object.
 */
 function extend(...objects){
    for(let i = 1; i < objects.length; i++){
        for(let j in objects[i]){
            objects[0][j] = objects[i][j];
        }
    }
    return objects[0];
}
module.exports.extend = extend;