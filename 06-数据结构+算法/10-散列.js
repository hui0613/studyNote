/**
 * 基于数组实现散列表
 */

function hashTable() {
    this.table = new Array(137)
    this.values = []
    this.simpleHash = simpleHash
    this.showDistro = showDistro
    this.betterHash = betterHash
    this.put = put
    this.buildChians = buildChians

    /**
     * 散列函数
     * 
     * 散列函数的选择依赖于键值的数值类型，
     * 例如，如果键值是整型数据，最简单的散列函数就是以数组的长度对键取余（但是若键值都是数组长度的倍数不推荐这种方法）
     * 
     * 在多数应用中，键值都是字符串类型，将字符串每个字符的 ASCII 码相加是一个不错的散列函数，这样散列值就是 ASCII 值
     * 的和除以数组长度的余数
     * 
     * @param {*} data 
     */
    function simpleHash(data) {
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i)
        }
        return total % this.table.length

    }

    /**
     * 为了避免碰撞，首先需要保证存储数据的数组的大小是个质数，
     * 数组的长度应该在 100 以上，这是为了保证数据分布的均匀
     * 
     * 使用 霍纳算法解决碰撞问题，该算法中还是使用 ASCII 码，不过每次求和都要承一个质数
     * 尽量的选择一个较小的质数
     * 
     * @param {*} data 
     */

    function betterHash(data) {
        const H = 31
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i) + total * H
        }
        total = total % this.table.length
        if (total < 0) {
            total += this.table.length - 1
        }
        return parseInt(total)
    }



    /**
     * 往 散列表中添加数据
     * 
     * @param {*} data 
     */
    // function put(data) {
    //     let index = this.betterHash(data)

    //     this.table[index] = data
    // }

    /**
     * 显示散列表中的数据
     */

    // function showDistro() {
    //     for (let i = 0; i < this.table.length; i++) {
    //         if (this.table[i] != undefined) {
    //             console.log(i + ":" + this.table[i])
    //         }
    //     }
    // }
}


/**
 * 例1
 * Clayton 和 Raymond 的散列值是一样，因此只能只能存储一个值，也就是发生了碰撞
 */
var someNames = ["David","Jennifer","Donnie","Raymond",
    "Cynthia","Mike","Clayton","Danny","Jonathan","Raymond"];
var hTable = new hashTable();
hTable.buildChians()
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

/**
 * 重现定义 put 函数，使得该方法接受键和数据作为参数，
 * 对键散列化后，将数据存储到散列表中
 * 
 * @param {*} key 
 * @param {*} data 
 */
// function put(key,data) {
//     let pos = this.betterHash(key)
//     this.table[pos] = data
// }


/**********碰撞处理************ */

/**
 * 开链法
 * 
 *
 * 定义一个二维数组作为散列表的数据存储结构
 */

function buildChians() {
    for (let i = 0; i < this.table.length; i++) {
        this.table[i] = new Array()
    }
}

/**
 * 重先定义 put 方法
 * 
 * @param {*} key 
 * @param {*} data 
 */
function put(key,data) {
    let pos = this.betterHash(key)
    let index = 0
    while (this.table[pos][index] != undefined) {
        index++
    }
    this.table[pos][index] = key
    this.table[pos][index + 1] = data
}


/**
 * 重先定义 get
 * 
 * @param {*} key 
 */
function get(key) {
    let pos = this.betterHash(key),
        index = 0
    while (this.table[pos][index] != key && this.table[pos][index] != undefined) {
        index += 2
    }
    return this.table[pos][index + 1]
}

function showDistro() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i][0] != undefined) {
            console.log(i + ":" + this.table[i])
        }
    }
}




/**
 * 
 * 重写 put 方法
 *
 * @param {*} key 
 * @param {*} data 
 */
function put(key,data) {
    let pos = this.betterHash(key)
    while (this.table[pos] != undefined) {
        pos++
    }
    this.table[pos] = key
    this.values[pos] = data
}

function get(key) {
    let pos = this.betterHash(key)
    while (this.table[pos] != key && this.table[pos] != undefined) {
        pos++
    }
    return this.values[pos]
}