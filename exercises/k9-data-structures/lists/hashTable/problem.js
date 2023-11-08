export class HashTable {
  constructor(length = 10) {
    this.hashTable = new Array(length).fill(null);
    this.actualSize = 0;
  }

  //The hashing function - this is a simple implementation of a hash to help with the time / space complexity.
   #hash(key) {
    if (typeof key === 'string') {
      return key.toString().length % this.hashTable.length;
    } else if (typeof key === 'number' && key % 1 === 0) {
      return key % this.hashTable.length;
    }

  }

  //Sets the key value item at a particular index (based on the hash method used).
  setItem(key, value) {
    const index = this.#hash(key);

    if (!this.hashTable[index])
      this.hashTable[index] = [];

    this.hashTable[index].push([key, value]);
    this.actualSize++;
  }

  //Gets the item with the certain key.
  getItem(key) {
    const index = this.#hash(key);

    if (this.hashTable[index]) {
      for(let item of this.hashTable[index]) {
          if (item[0] === key)
            return item;
      }
    }

    return null;
  }
  // searches for key and returns index
  search(key) {
    const index = this.#hash(key);
    if (this.hashTable[index] && this.hashTable[index].find(item => item[0] === key))
      return index;

    return null;
  }

  delete(key) {
    const index = this.#hash(key);

    if (this.hashTable[index]) {
      this.hashTable[index] = null;
      this.actualSize--;

      return true;
    }

    return false;
  }

  //Returns the length of the hash table.
  length() {
    return this.actualSize;
  }

  //Returns the hash table items - mainly used for testing.
  get() {
    return this.hashTable;
  }

  orderedByRemainders() {

    // for (const key of array) {
    //   const item = key % 10;
    //   this.setItem(key, item)
    // }

    let finalArray = []

    for (let item of this.hashTable) {
      if (item){
        for (let array of item) {
          finalArray.push(array[0]);
        }
      }

    }

    return finalArray
  }
}



/*
Display the ascending values for the array, based on the remainder of dividing each entry to 10.
Provide the time / space complexity for the algorithm implemented.
e.g.
  For this given array: [10, 15, 12, 14, 17, 99, 43, 55]
  The result would be:  [10, 12, 43, 14, 15, 55, 17, 99]

Note:
 - Consider edge cases as well (e.g. empty array, negative numbers, etc.)
 - Write tests for some cases.
 */
