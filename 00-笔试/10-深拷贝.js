function deepCopy(target) {

    if (target === null) return null
    if (target instanceof RegExp) return new RegExp(target)
    if (target instanceof Date) return new Date(target)
    if (typeof target === 'function') return (new function (target) { })

    //若数据为基本数据类型，则直接返回
    if (typeof target != 'object') {
        return target
    }

    /**
     * [].__proto__.constructor = Array()
     * {}.__proto__.constructor = Object()
     */
    let newObj = new target.__proto__.constructor

    /**
     * 也可以写成
     * 
     * let newObj = Array.isArray(target)?[]:{}
     */

    for (let key in target) {
        newObj[key] = deepCopy(target[key])
    }
    return newObj
}