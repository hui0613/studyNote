
/**
 * 
 * instanceof 实现原理
 * 
 * 检测构造函数的原型是否出现在实例的原型链上
 * 
 * @param {*} letfValue 实例对象
 * @param {*} rightValue 构造函数
 */
function new_instanceof_of(letfValue,rightValue) {
    let rightProto = rightValue.prototype,
        leftProto = letfValue.__proto__
    while (true) {
        if (leftProto === null) {
            return false
        }
        if (leftProto === rightProto) {
            return true
        }
        leftProto = leftProto.__proto__
    }
}