import { ListTestSuite } from "../shared/test-suite.js";
import { MyArray } from "./problem.js";

describe("array-implementation", () => {
    function myArrayFactory(max) {
        const arr = new MyArray();

        for (let i = 0; i < max; i++) {
            arr.nodes[i] = i;
        }

        return arr;
    }

    test("construction", () => {
        const list = myArrayFactory(3);
        console.log(list);
        // Don't use `get(index)` so we can be sure constructor works for problem.js
        // for really TDD we'd want to use `get(index)`
        expect(list.nodes[0]).toBe(0);
        expect(list.nodes[1]).toBe(1);
        expect(list.nodes[2]).toBe(2);
        expect(list.nodes[3]).toBe(undefined);
    });

    ListTestSuite(myArrayFactory);
});
