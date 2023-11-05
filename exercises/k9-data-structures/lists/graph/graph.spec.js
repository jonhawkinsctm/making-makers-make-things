import { Graph } from './problem.js';

describe('Graph', () => {
    let graph;

    beforeAll(() => {
        graph = new Graph();

        graph.addNode('a');
        graph.addNode('b');
        graph.addNode('c');
        graph.addNode('d');

        graph.addEdge('a', 'c');
        graph.addEdge('b', 'c');
        graph.addEdge('c', 'b');
        graph.addEdge('d', 'a');

        console.log(graph.edges)
        console.log(graph.nodes)
    });

    test('successfully built',() => {
        expect(graph.nodes.map(x => x.value)).toEqual(['a', 'b', 'c', 'd']);
    });

    test('has edge values', () => {
       expect([...graph.edges.values()].map(({ a, b }) => `${a} => ${b}`)).toEqual(['a => c', 'b => c', 'c => b', 'd => a']);
    });

    test('has node c', () => {
        expect(graph.findNode('c')).toEqual({key: 'c', value: 'c'});
    });

    test('node b is adjacent to node c', () => {
       expect(graph.adjacent('c')).toEqual(['b']);
    });

    test('number of indegree nodes of c', () => {
        expect(graph.indegree('c')).toBe(2);
    });

    test('number of outdegree nodes of c', () => {
        expect(graph.outdegree('c')).toBe(1);
    });

    test('nodes d and a have edge', () => {
       expect(graph.hasEdge('d', 'a')).toBe(true);
    });

    test('nodes a and d do not have edge', () => {
        expect(graph.hasEdge('a', 'd')).toBe(false);
    });

    describe('when edges are removed', () => {
       beforeEach(() => {
        graph.removeEdge('c', 'b');
       });

       test('has correct remaining nodes', () => {
           expect(graph.nodes.map(x => x.value)).toEqual(['a', 'b', 'c', 'd']);
       });

       test('has correct edge values', () => {
           console.log(graph.edges)
           expect([...graph.edges.values()].map(({ a, b }) => `${a} => ${b}`)).toEqual(['a => c', 'b => c', 'd => a']);
       });
    });

    describe('when node is removed', () => {
        beforeEach(() => {
            graph.removeNode('c');
        });

        test('has correct remaining nodes', () => {
            expect(graph.nodes.map(x => x.value)).toEqual(['a', 'b', 'd']);
        });

        test('has correct edge values', () => {
            expect([...graph.edges.values()].map(({ a, b }) => `${a} => ${b}`)).toEqual(['d => a']);
        });
    });

    // describe('when edge has weight', () => {
        // beforeEach(() => {
        //     graph.setEdgeWeight('d', 'a', 5);
        // });
        //
        // test('can can retrieve weight value', () => {
        //     expect(graph.getEdgeWeight('d', 'a')).toEqual(5);
        // });
    // });
});
