//BFS solution, queue - FIFO, 형제 노드부터 

var numIslands = function(grid) {
    if(!grid || grid.length == 0) return 0;
    let n = grid.length, m = grid[0].length;

    let dx = [0, 0, -1, 1], dy = [-1, 1, 0, 0];
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j]==1){
                let queue = [{x:i, y:j}];
                grid[i][j] = 0;
                while(queue.length > 0){ //BFS는 Queue에서 맨 처음 거를 일단 먼저 POP을 해서 빼고, 그 다음에 Queue에 push를 하는 것
                    const {x , y} = queue.shift(); // first in first out, pop먼저
                    for (let k = 0; k < 4; k ++){
                        let adjX = x + dx[k], adjY = y + dy[k];
                        if(0<=adjX && adjX<n && 0 <=adjY && adjY<m && grid[adjX][adjY] == 1){
                            grid[adjX][adjY] = 0;
                            queue.push({x:adjX, y:adjY}) //그리고 push
                        }
                    }
                }
                count ++;
            }
        }
    }
    return count;

};

//BFS : https://sarah950716.tistory.com/13 요기 설명 잘 됨!
//so beautiful code!
