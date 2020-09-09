/**
 * Set 类的实现基于数组
 */
function Set() {
    this.dataStore = []
    this.add = add
    this.remove = remove
    this.size = size
    this.contains = contains
    this.union = union
    this.subset = subset
    this.intersect = intersect
    this.show = show
}

/**
 * 添加元素
 * 
 * @param {*} data 
 */
function add(data) {
    if (this.dataStore.findIndex(data) < 0) {
        this.dataStore.push(data)
        return true
    } else {
        return false
    }
}

/**
 * 移除元素
 * @param {*} data 
 */
function remove(data) {
    let pos = this.dataStore.indexOf(data)
    if (pos >= 0) {
        this.dataStore.splice(pos,1)
        return true
    } else {
        return false
    }
}

/**
 * 显示集合中元素
 */
function show() {
    return this.dataStore
}

function size() {
    return this.dataStore.length
}

// 判断一个集合中是否存在某个元素
function contains(data) {
    if (this.dataStore.indexOf(data) >= 0) {
        return true
    } else {
        return false
    }
}

/**
 * 求并集
 * 结果需要用另一个结合接受，不影响原有的集合
 * @param {set} set  
 * @return {set} tempset
 */
function union(set) {
    let tempset = new Set()
    for (let i = 0; i < this.dataStore.length; i++) {
        tempset.add(this.dataStore[i])
    }
    for (let i = 0; i < set.length; i++) {
        if (tempset.contains(set[i]) < 0) {
            tempset.add(set[i])
        }
    }
    return tempset
}

/**
 * 求交集
 * @param {*} set 
 */
function intersect(set) {
    let tempset = new Set()
    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i]) >= 0) {
            tempset.add(this.dataStore[i])
        }
    }
    return tempset
}

/**
 * 
 * 判断一个集合是否另一集合的子集
 * @param {*} set 
 */
function subset(set) {
    if (this.size() > set.size()) {
        return false
    } else {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (set.contains(this.dataStore[i]) < 0) {
                return false
            }
        }
        return true
    }
}