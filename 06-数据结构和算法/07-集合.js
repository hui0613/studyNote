// class Set {
//   constructor() {
//     this.items = {};
//   }
//   // 判断集合中是否有某元素
//   has(item) {
//     // 排除原型中有同名属性的可能
//     return Object.hasOwnPrototype.call(this.items, item);
//   }

//   // 添加元素
//   add(item) {
//     if (!this.has(item)) {
//       this.items[item] = item;
//       return true;
//     }
//     return false;
//   }

//   remove(item) {
//     if (this.has(item)) {
//       delete this.items[item];
//       return true;
//     }
//     return false;
//   }
//   clear() {
//     this.items = {};
//   }
//   size() {
//     // Obejct.keys() 方法返回对象所有键值组成的数组
//     return Object.keys(this.items).length;
//   }

//   values() {
//     //   下面代码兼容性问题
//     return Object.values(this.items);

//     // 通用代码
//     let values = [];
//     for (let key in this.items) {
//       values.push(this.items[key]);
//     }
//     return values;
//   }

//   // 并集
//   union(set) {
//     let unionSet = new Set();
//     this.values().forEach((value) => {
//       unionSet.add(value);
//     });
//     set.values().forEach((value) => {
//       unionSet.add(value);
//     });
//     return unionSet;
//   }

//   //交集
//   intersection(set) {
//     let intersectionSet = new Set();
//     const values = this.values();
//     values.forEach((value) => {
//       if (set.has(value)) {
//         intersectionSet.add(value);
//       }
//     });
//     return intersectionSet;
//   }

//   //差集
//   difference(set) {
//     let differenceSet = new Set();
//     this.values.forEach((value) => {
//       if (!set.has(value)) {
//         differenceSet.add(value);
//       }
//     });
//     return differenceSet;
//   }

//   //子集
//   isSubsetOf(set) {
//     if (this.size() > set.size()) {
//       return false;
//     }
//     let isSubSet = true;
//     this.values().every((value) => {
//       // every 遍历数组，只有所有元素都返回 true 是才会返回 true
//       if (!set.has(value)) {
//         isSubSet = false;
//         return false;
//       }
//       return true;
//     });
//     return isSubSet;
//   }
// }

const set = new Set();
set.add(1);
set.add(2);
console.log(set.values());
