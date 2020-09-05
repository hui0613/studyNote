
/**
 * 使用数组实现队列
 */
function Queue() {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty

    function enqueue(el) {
        this.dataStore.push(el)
    }
    function dequeue() {
        this.dataStore.shift()
    }
    //读取队首元素
    function front() {
        return this.dataStore[0]
    }
    //读取队尾元素
    function back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    function toString() {
        let resStr = ''
        for (let i = 0; i < this.dataStore.length; i++) {
            resStr += this.dataStore[i] + '\n'
        }
        return resStr
    }
    function empty() {
        if (this.dataStore.length === 0) {
            return true
        }
        return false
    }
}