import { ListTestSuite } from "../shared/test-suite.js";
import { LinkedList, Node } from "./problem.js";

describe("linked-list", () => {
    function linkedListFactory(max) {
        const list = new LinkedList();
        list.head = new Node(0);

        let pointer = list.head;

        for (let i = 1; i < max; i++) {
            pointer.next = new Node(i);
            pointer = pointer.next;
        }
        return list;
    }

    test("construction", () => {
        const list = linkedListFactory(3);
        // Don't use `get(index)` so we can be sure constructor works for problem.js
        // for really TDD we'd want to use `get(index)`
        expect(list.head.value).toBe(0);
        expect(list.head.next.value).toBe(1);
        expect(list.head.next.next.value).toBe(2);
        expect(list.head.next.next.next).toBe(null);
    });

    ListTestSuite(linkedListFactory);
});
