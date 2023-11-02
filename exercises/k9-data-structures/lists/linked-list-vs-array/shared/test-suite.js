import { jest } from "@jest/globals";

export function ListTestSuite(factory) {
    describe("accessors", () => {
        test("get", () => {
            const list = factory(3);
            expect(list.get(0)).toBe(0);
            expect(list.get(1)).toBe(1);
            expect(list.get(2)).toBe(2);
            expect(() => { list.get(3) }).toThrow('index out of bounds');
            expect(() => { list.get(10) }).toThrowError(new Error('index out of bounds'));
        });

    //     test("size", () => {
    //         expect(factory(3).size()).toBe(3);
    //         expect(factory(10).size()).toBe(10);
    //     });
    //
    //     test("forEach", () => {
    //         const list = factory(3);
    //         const spy = jest.fn();
    //
    //         list.forEach(spy);
    //
    //         expect(spy).toHaveBeenCalledTimes(3);
    //         expect(spy).toHaveBeenNthCalledWith(1, 0);
    //         expect(spy).toHaveBeenNthCalledWith(2, 1);
    //         expect(spy).toHaveBeenNthCalledWith(3, 2);
    //     });
    // });
    //
    // describe("setters", () => {
    //     test("prepend", () => {
    //         const list = factory(3);
    //
    //         expect(list.size()).toBe(3);
    //         expect(() => { list.get(3)}).toThrow("index out of bounds");
    //
    //         list.prepend("Foo");
    //
    //         expect(list.get(0)).toBe("Foo");
    //         expect(list.get(1)).toBe(0);
    //         expect(() => { list.get(4)}).toThrow();
    //         expect(list.size()).toBe(4);
    //     });
    //
    //     test("append", () => {
    //         const list = factory(3);
    //         expect(() => { list.get(3)}).toThrow();
    //
    //         list.append("bar");
    //
    //         expect(list.get(2)).toBe(2);
    //         expect(list.get(3)).toBe("bar");
    //         expect(() => { list.get(4)}).toThrow();
    //         expect(list.size()).toBe(4);
    //     });
    //
    //     test("insertAt", () => {
    //         const list = factory(2);
    //         expect(list.size()).toBe(2);
    //         expect(list.get(0)).toBe(0);
    //         expect(list.get(1)).toBe(1);
    //
    //         list.insertAt(1, "baz");
    //
    //         expect(list.get(0)).toBe(0);
    //         expect(list.get(1)).toBe("baz");
    //         expect(list.get(2)).toBe(1);
    //         expect(list.size()).toBe(3);
    //
    //         const list2 = factory(3);
    //         expect(list2.size()).toBe(3);
    //         expect(list2.get(0)).toBe(0);
    //         expect(list2.get(1)).toBe(1);
    //         expect(list2.get(2)).toBe(2);
    //
    //         list2.insertAt(3, "baz");
    //         expect(list2.get(3)).toBe("baz");
    //
    //
    //     });
    });
}
