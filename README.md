# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kvsuen/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArray, expectedArray)`: assert if two arrays are equal
* `assertEqual(actual, expected)`: assert if two values of primative type are equal
* `assertObjectsEqual(actualObject, expectedObject)`: assert if two objects are equal
* `countLetters(string)`: count occurence of each letter
* `countOnly(allItems, itemsToCount)`: count occurence of specified item that appears in an array
* `eqArrays(array1, array2)`: compare if two arrays are equal, returns a boolean
* `eqObjects(object1, object2)`: compare if two objects are equal, returns a boolean
* `findKey(object, callback)`: find key in object
* `findKeyByValue(objectData, valueOfKeyToFind)`: find key depending on value
* `flatten(array)`: turn nested array into single array
* `head(array)`: return first element of the arra
* `letterPositions(string)`: return index of all letters in a string 
* `map(array, callback)`: perform a callback function for each element in the array, and return a new array
* `middle(array)`: return middle elements of an array
* `tail(array)`: excluding the first element, return the rest of the array
* `takeUntil(array, callback)`: return array up until callback condition
* `without(source, itemsToRemove)`: return array without the specified items