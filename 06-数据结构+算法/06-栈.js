
/**
 * 实现栈数据结构
 */

function Stack() {
    this.dataStore = []
    this.top = 0   //记录栈顶位置
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length

    function push(el) {
        this.dataStore[this.top++] = el
    }
    function pop() {
        return this.dataStore[--this.top]
    }
    function peek() {
        return this.dataStore[this.top - 1]
    }
    function length() {
        return this.top
    }
    function clear() {
        this.top = 0
    }
}