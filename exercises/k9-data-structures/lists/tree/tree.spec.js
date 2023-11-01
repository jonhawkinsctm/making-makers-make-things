import { Tree } from './problem.js';

describe('The Orlov meerkat family tree', () => {
    let tree;

    beforeAll(() => {
        tree = new Tree(1, 'Aleksandr');

        tree.insert(1, 11, 'Bogdan');
        tree.insert(1, 12, 'Maiya');
        tree.insert(12, 27, 'Oleg');
        tree.insert(1, 19, 'Vassily');
    });

    test('successfully built', () => {
        expect(tree.root.hasChildren).toBe(true);
    });

    test('Aleksandr is head of the family', () => {
        expect(tree.root.value).toBe('Aleksandr');
    });

    test('Maiya has a meerpup', () => {
        expect(tree.find(12).isLeaf).toBe(false);
    });

    test('Oleg does not have a meerpup', () => {
        expect(tree.find(27).isLeaf).toBe(true);
    });

    test('key 19 is Vassily', () => {
        expect(tree.find(19).value).toEqual('Vassily');
    });

    test('All the family using pre-order traversal', () => {
        expect([...tree.preOrderTraversal()].map(x => x.value)).toEqual(['Aleksandr', 'Bogdan', 'Maiya', 'Oleg', 'Vassily']);
    });

    test('All the family using post-order traversal', () => {
        expect([...tree.postOrderTraversal()].map(x => x.value)).toEqual(['Bogdan', 'Oleg', 'Maiya', 'Vassily', 'Aleksandr']);
    });

    // describe('when Maiya and her child are disowned after "the mongoose affair" ', () => {
    //     beforeEach(() => {
    //         tree.remove(12);
    //     });
    //
    //     test('Maiya has been removed from the family tree', () => {
    //         expect(tree.find(12)).toBe(undefined);
    //     });
    //
    //     test('Oleg has been sent to an orphanage', () => {
    //         expect(tree.find(27)).toBe(undefined);
    //     });
    //
    //     test('The remaining family using pre-order traversal', () => {
    //         expect([...tree.preOrderTraversal()].map(x => x.value)).toEqual(['Aleksandr', 'Bogdan', 'Vassily']);
    //     });
    //
    //     test('The remaining family using post-order traversal', () => {
    //         expect([...tree.postOrderTraversal()].map(x => x.value)).toEqual(['Bogdan', 'Vassily', 'Aleksandr']);
    //     });
    // });
});
