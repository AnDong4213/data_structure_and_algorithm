const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

/* const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};
dfs(2); */

const visited = new Set();
visited.add(2);
const q = [2];
while (q.length) {
  const n = q.shift();
  console.log(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(c);
    }
  });
}
console.log("----------------------------------------");

const pacificAtlantic = function (matrix) {
  if (!matrix || !matrix[0]) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  let flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    // console.log(flow[r][c]);
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1]
    ].forEach(([nr, nc]) => {
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        !flow[nr][nc] &&
        matrix[nr][nc] >= matrix[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  for (let r = 0; r < m; r++) {
    dfs(r, 0, flow1);
    // console.log(r, n - 1);
    dfs(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c++) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }
  // console.log(flow1);
  // console.log(flow2);
  const res = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  // return res;
  console.log(JSON.stringify(res));
};

let m = [
  [1, 2, 2, 3],
  [3, 2, 3, 4],
  [2, 4, 5, 13],
  [6, 7, 1, 4]
];
pacificAtlantic(m); // [[0,3],[1,3],[2,2],[2,3],[3,0],[3,1]]  [[0,3],[1,3],[2,2],[2,3],[3,0],[3,1]]
