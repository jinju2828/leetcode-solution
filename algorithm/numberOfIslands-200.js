//What is Depth First Search?

// var DFS = function (node){
//     let s = new Stack(this.nodes.length);
//     let explored = new Set();
//     s.push(node);
//
//     explored.add(node);
//
//     while(!s.isEmpty()){
//         let t = s.pop();
//
//         console.log(t);
//
//         this.edges[t]
//             .filter(n=>!explored.has(n))
//             .forEach(n=> {
//                 explored.add(n);
//                 s.push(n);
//             })
//     }
// }
//
// let g = new Graph(7);
// g.addNode("A");
// g.addNode("B");
// g.addNode("C");
// g.addNode("D");
// g.addNode("E");
// g.addNode("F");
// g.addNode("G");
//
// g.addEdge("A", "C");
// g.addEdge("A", "B");
// g.addEdge("A", "D");
// g.addEdge("D", "E");
// g.addEdge("E", "F");
// g.addEdge("B", "G");
//
// g.DFS("A");
