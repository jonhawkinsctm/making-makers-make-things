import { HashTable } from "./problem.js";

describe("Generic hash table tests", () => {
  test("set item", () => {
    const hashTable = new HashTable();
    expect(hashTable.length()).toBe(0);

    hashTable.setItem("someKey", "someValue");
    hashTable.setItem("testKey", "testValue");
    hashTable.setItem("anotherKey", "anotherValue")

    expect(hashTable.length()).toBe(3);
  });


  test("get item (when it exists)", () => {
    const hashTable = new HashTable();
    const key = "someKey";
    const value = "someValue";
    hashTable.setItem(key, value);

    expect(hashTable.getItem(key)).toEqual([key, value]);
  });

  test("get item (when it does not exist", () => {
    const hashTable = new HashTable();
    hashTable.setItem("someKey", "someValue");

    expect(hashTable.getItem("someInvalidKey")).toEqual(null);
  });

  test("search item (when it exists)", () => {
    const hashTable = new HashTable();
    const key = "someKey";
    const value = "someValue";
    hashTable.setItem(key, value);

    //calculated based on the algorithm from the hash method.
    expect(hashTable.search(key)).toEqual(7);
  });

  test("search item (when it does not exist)", () => {
    const hashTable = new HashTable();
    hashTable.setItem("someKey", "someValue");

    expect(hashTable.search("someInvalidKey")).toEqual(null);
  });

  test("delete item (when it exists)", () => {
    const hashTable = new HashTable();
    const key = "someKey";
    const value = "someValue";

    hashTable.setItem(key, value);
    expect(hashTable.length()).toBe(1);

    expect(hashTable.delete(key)).toEqual(true);
    expect(hashTable.length()).toBe(0);
  });

  test("delete item (when it does not exist)", () => {
    const hashTable = new HashTable();
    hashTable.setItem("someKey", "someValue");
    expect(hashTable.length()).toBe(1);

    console.log(hashTable.hashTable)

    expect(hashTable.delete("someOtherKey")).toEqual(false);
    expect(hashTable.length()).toBe(1);
  });

  test("hash table actual length", () => {
    const hashTable = new HashTable();
    hashTable.setItem("someKey", "someValue");
    hashTable.setItem("someOtherKey", "someOtherValue");

    expect(hashTable.length()).toBe(2);
  });

  test("re order list by remainders", () => {
    const hashTable = new HashTable();
    const array = [10, 15, 12, 14, 17, 99, 43, 55]
    for (const key of array) {
      const item = key % 10;
      hashTable.setItem(key, item)
    }
    expect(hashTable.orderedByRemainders(array)).toStrictEqual([10, 12, 43, 14, 15, 55, 17, 99])
  })

});
