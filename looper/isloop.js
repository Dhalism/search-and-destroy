'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let dict = {}
  let slow = linkedlist.head
  let fast = linkedlist.head
  let counter = 0
  let dictvals = Object.values(dict)
 do{
    counter++
    //console.log('dict ', dict)
    if (slow in dictvals){
      console.log('slow ', slow)
    }

    dict[counter] = slow
    dictvals = Object.values(dict)


    slow = slow.next
    fast = fast.next.next

    if (!fast.next || !fast.next.next || !slow.next){
      return false
    }
  } while(fast !== slow)

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
