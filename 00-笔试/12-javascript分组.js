/**
 * https://github.com/jirengu/frontend-interview/issues/37
 * 
 * 给定整数 n 和 m，写一个函数 dispatch ，把 1-n 尽量平均地分成m个组
 *
 * var n = 2, m = 2;
 * dispatch(n, m) 得到[[1], [2]];
 * dispatch(5, 2) // [ [ 1, 2, 3 ], [ 4, 5 ] ]
 * dispatch(10, 6) //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ], [ 10 ] ]
 */

function dispatch(n,m) {
    var as,i,j,c = 1,arrs = [];
    as = Math.floor(n / m); //取整
    for (i = 0; i < m; i++) {
        arrs.push([]); //初始化分隔的数组
        // i < n % m 时放置较多的个数，
        for (j = 0; j < (i < n % m ? as + 1 : as); j++) //分隔的数组长度
            arrs[i].push(c++);   //按照顺序放数字  
    }
    return arrs;
}
console.log(dispatch(10,6));