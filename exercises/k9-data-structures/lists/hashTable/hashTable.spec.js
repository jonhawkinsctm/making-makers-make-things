import { HashTable } from "./problem.js";

describe("Generic hash table tests", () => {
  test("set item", () => {
    const hashTable = new HashTable();
    expect(hashTable.length()).toBe(0);

    hashTable.setItem("someKey", "someValue");

    expect(hashTable.length()).toBe(1);
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

    expect(hashTable.delete("someOtherKey")).toEqual(false);
    expect(hashTable.length()).toBe(1);
  });

  test("hash table actual length", () => {
    const hashTable = new HashTable();
    hashTable.setItem("someKey", "someValue");
    hashTable.setItem("someOtherKey", "someOtherValue");

    expect(hashTable.length()).toBe(2);
  });

});
