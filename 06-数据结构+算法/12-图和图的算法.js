/**
 * 创建顶点类
 */
function Vertex(label) {
    // 标识节点
    this.label = label
}

function Graph(v) {
    // 存储顶点的个数
    this.vertices = v
    this.edges = 0
    // 邻接表
    this.adj = []
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = []
    }
    this.vertextList = [];
    this.mask = new Array(this.vertices).fill(false)
    this.edgeTo = []
    this.addEdge = addEdge
    this.toString = toString
    this.showGraph = showGraph
    this.dfs = dfs
    this.bfs = bfs
    this.pathTo = pathTo
    this.topSort = topSort
    this.topSortHelper = topSortHelper

    /**
     * 添加边
     * 
     * 传入边所链接的两个顶点
     * @param {*} v 
     * @param {*} w 
     */
    function addEdge(v,w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++
    }

    /**
     * 显示图
     */
    function showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            console.log(i + " -> " + this.adj[i])
        }
    }

    /**
     * 
     * @param {*} v  开始搜索的顶点
     */
    function dfs(v) {
        this.mask[v] = true
        if (this.adj[v] != undefined) {
            //访问到一个点，作相应的操作
            console.log(v)
        }
        for (let i = 0; i < this.adj[v].length; i++) {
            if (!this.mask[this.adj[v][i]]) {
                this.dfs(this.adj[v][i])
            }
        }
    }

    function bfs(s) {
        let queue = []
        this.mask[s] = true
        // 以访问的节点添加到队列中
        queue.push(s)
        while (queue.length > 0) {
            let v = queue.shift()
            if (v != undefined) {
                console.log("v: " + v)
            }

            for (let i = 0; i < this.adj[v].length; i++) {
                if (!this.mask[this.adj[v][i]]) {
                    this.edgeTo[this.adj[v][i]] = v
                    this.mask[this.adj[v][i]] = true
                    queue.push(this.adj[v][i])
                    console.log(this.edgeTo)
                }
            }
            // console.log(queue)
        }
        // console.log(this.edgeTo)
    }
    /**
     * 
     * 最短路径中用于显示到达指定顶点的路径
     * @param {*} s 起点
     * @param {*} v 终点
     */
    function pathTo(s,v) {
        let source = 0;
        if (!this.mask[v]) {
            //顶点不可达
            return undefined;
        }

        let path = [];
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }

    function topSort() {
        let stack = [],
            visited = new Array(this.vertices).fill(false)

        for (let i = 0; i < this.vertices; i++) {
            // console.log(i)
            if (!visited[i]) {

                this.topSortHelper(i,visited,stack)
            }
        }
        for (let i = 0; i < stack.length; i++) {
            // console.log(stack)
            // console.log(i)
            if (stack[i] != undefined) {
                // console.log(stack[i])
                console.log(this.vertextList[stack[i]])
            }
        }
    }

    function topSortHelper(v,visited,stack) {
        // console.log(v)
        visited[v] = true
        // console.log("v: " + v)
        // console.log(this.adj[v])
        for (let i = 0; i < this.adj[v].length; i++) {
            if (!visited[this.adj[v][i]]) {
                this.topSortHelper(this.adj[v][i],visited,stack)
            }
        }
        // console.log(stack)
        stack.push(v)
    }
}

g = new Graph(6);
// g.addEdge(0,1);
// g.addEdge(0,3);
// g.addEdge(4,5);
// // g.addEdge(1,3);
// g.addEdge(1,4);
// g.addEdge(3,2);
// g.addEdge(2,5);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertextList = ['a','b','c','d','e','f']
// g.showGraph();
// g.bfs(0) 
// g.dfs(0)
// console.log(g.pathTo(5))
g.topSort()



