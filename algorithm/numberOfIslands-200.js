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

function numIslands(grid) {
    const H = grid.length;
    const W = H && grid[0].length;
    let count = 0;

    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (grid[r][c] === '0') continue; // count 를 늘리지 않는다. 방문 했던 곳을 0으로 하면 DFS를 trigger하는 node로 간주되지 않으므로!
            count++;
            dfs(r, c);
        }
    }
    return count;
    function dfs(r,c){
        if (r<0 || c<0 || r===H || c===W) return; // grid 밖으로 넘어가면 terminate
        if (grid[r][c] ==='0') return; // island 가다가 water 0을 마주치면 terminate

        grid[r][c] = '0'; // mark as 0 when visited
        dfs(r-1, c);
        dfs(r+1, c);
        dfs(r, c-1);
        dfs(r, c+1);

    }
}


