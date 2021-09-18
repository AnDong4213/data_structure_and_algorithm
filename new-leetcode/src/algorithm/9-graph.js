// 邻接表  使用一种叫作邻接表的动态数据结构来表示图。

const Graph = (function () {
  let vertices = [];
  let adjList = new Map();
  let time = 0;

  class Graph {
    addVertex(v) {
      vertices.push(v);
      adjList.set(v, []);
    }

    addEdge(v, w) {
      adjList.get(v).push(w);
      adjList.get(w).push(v);
    }

    static initializeColor() {
      let color = {};
      for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = "white";
      }
      return color;
    }

    // 图的广度优先搜索算法
    bfs(v, callback) {
      let color = Graph.initializeColor();
      let queue = [];
      queue.push(v);

      while (queue.length) {
        let u = queue.shift();
        let neighbors = adjList.get(u);
        color[u] = "grey";
        for (let i = 0; i < neighbors.length; i++) {
          let w = neighbors[i];
          if (color[w] === "white") {
            color[w] = "grey";
            queue.push(w);
          }
        }
        color[u] = "black";
        if (callback) {
          callback(u);
        }
      }
    }
    BFS(v) {
      let color = Graph.initializeColor();
      let queue = [],
        d = {},
        pred = {};
      queue.push(v);

      for (let i = 0; i < vertices.length; i++) {
        d[vertices[i]] = 0;
        pred[vertices[i]] = null;
      }
      while (queue.length) {
        let u = queue.shift();
        let neighbors = adjList.get(u);
        color[u] = "grey";
        for (let i = 0; i < neighbors.length; i++) {
          let w = neighbors[i];
          if (color[w] === "white") {
            color[w] = "grey";
            d[w] = d[u] + 1;
            pred[w] = u;
            queue.push(w);
          }
        }
        color[u] = "black";
      }
      return {
        distances: d,
        predecessors: pred
      };
    }
    path(shortestPathA) {
      let fromVertex = vertices[0];
      for (let i = 1; i < vertices.length; i++) {
        let toVertex = vertices[i];
        let path = [];

        for (
          let v = toVertex;
          v !== fromVertex;
          v = shortestPathA.predecessors[v]
        ) {
          path.push(v);
        }
        path.push(fromVertex);
        let s = path.pop();
        while (path.length) {
          s += " - " + path.pop();
        }
        console.log(s);
      }
    }

    // 图的深度优先算法，深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。换句话说，它是先深度后广度地访问顶点，
    // 深度优先搜索算法不需要一个源顶点。在深度优先搜索算法中，若图中顶点v未访问，则访问该顶点v。
    static dfsVisit(u, color, callback) {
      color[u] = "grey";
      if (callback) {
        callback(u);
      }
      let neighbors = adjList.get(u);
      console.log(neighbors);
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          this.dfsVisit(w, color, callback);
        }
      }
      color[u] = "black";
    }
    dfs(callback) {
      let color = Graph.initializeColor();

      for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === "white") {
          Graph.dfsVisit(vertices[i], color, callback); // 只会被执行一次
        }
      }
    }

    static DFSVisit(u, color, d, f, p) {
      color[u] = "grey";
      d[u] = ++time;

      let neighbors = adjList.get(u);
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          p[w] = u;
          this.DFSVisit(w, color, d, f, p);
        }
      }
      color[u] = "black";
      f[u] = ++time;
    }
    DFS() {
      let color = Graph.initializeColor(),
        d = {},
        f = {},
        p = {};
      time = 0;
      for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
      }
      for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === "white") {
          Graph.DFSVisit(vertices[i], color, d, f, p); // 代码只运行一次
        }
      }

      return {
        discovery: d,
        finished: f,
        predecessors: p
      };
    }

    getInfo() {
      console.log(vertices);
      console.log(adjList);
    }
  }

  return Graph;
})();

/* let graph = new Graph();
let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.getInfo();

function print(v) {
  console.log(v);
}
// graph.bfs("C", print);

// let A = graph.BFS("A");
// console.log(A);
// graph.path(A);

// graph.dfs(print);
console.log(graph.DFS()); */

let graph = new Graph();
let myVertices = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("F", "E");
var result = graph.DFS();
console.log(result);
