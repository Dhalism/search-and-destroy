'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let dict = {}
  let slow = linkedlist.head
  let fast = linkedlist.head
  let counter = 1
  let previousslow
  dict[1] = linkedlist.head
  let dictvalues = Object.values(dict)
 do{

   console.log('value', slow.value, fast.value)
    if (slow.next.previous!==slow){
      console.log('slow', slow)

    }

    slow = slow.next
    fast = fast.next.next

    if (!fast.next || !fast.next.next || !slow.next){
      return false
    }
  } while(fast !== slow)
  console.log('value', slow.value, fast.value)
  return true
  // let dict = { }
  // dict[linkedlist.head.value] = linkedlist.head.value
  // let checklist = linkedlist.head
  // while(checklist.next){

  //   if (!dict[checklist.next.value]){

  //     dict[checklist.next.value] = checklist.next.value
  //   }
  //   else{

  //     return  true
  //   }

  //   checklist = checklist.next
  // }
  // return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
