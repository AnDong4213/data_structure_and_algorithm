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
