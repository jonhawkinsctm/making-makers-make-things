// import { ListTestSuite } from "../shared/test-suite.js";
import { Tree } from './soultion.js';

describe("tree", () => {
    test("construction", () => {
        const tree = new Tree(1, 'AB');

        tree.insert(1, 11, 'AC');
        tree.insert(1, 12, 'BC');
        tree.insert(12, 121, 'BG');

        expect(tree.root.hasChildren).toBe(true);
    });
});
