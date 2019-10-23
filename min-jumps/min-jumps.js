'use strict';

// Complete this algo
const minJumps = arr => {

  let start = 0
  let end = arr[0]
  let max;
  let counter = 0
  do{
    console.log(arr)
    end = arr[start]
    console.log(start, end)
    max = Math.max(...arr.slice(start, end))
    console.log(max)
    start = max;
    counter++
  }while(end<arr.length-1)
  return counter;
};

module.exports = minJumps
