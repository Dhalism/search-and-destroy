'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	let start = 0;
	let end = array.length-1
	let middle
 while(array[middle]!==target)
	{
		middle = Math.ceil((end-start)/2)+start

		if (target===array[middle]){
			return true
	 }
		if (end<=start){
			 return false
		}

		else if(target>array[middle]){

			start = middle+1

		}
		else if(target<array[middle]){

			end = middle-1
		}
	}

	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
