const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
};

const dfs = (n, path) => {
  console.log(n, path);
  Object.keys(n).forEach((k) => {
    dfs(n[k], path.concat(k));
  });
};
dfs(json, []);

// console.log(Object.keys(1));   []
// console.log(Object.keys("1")); // ['0']
// console.log(Object.keys([1])); // ['0']
// console.log(Object.keys(["1"])); // ['0']
