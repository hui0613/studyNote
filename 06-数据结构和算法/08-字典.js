/**
 * Dictionary类
 */

function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.count = count;
  this.clear = clear;

  this.showAll = showAll;

  function add(key, value) {
    this.dataStore[key] = value;
  }
  function find(key) {
    return this.dataStore[key];
  }
  function remove(key) {
    delete this.dataStore[key];
  }

  function count() {
    let n = 0;
    for (let key in Object.keys(this.dataStore)) {
      n++;
    }
    return n;
  }

  function clear() {
    for (let key in Object.key(this.dataStore)) {
      delete this.dataStore[key];
    }
  }

  function showAll() {
    //对所有键进行排序后显示
    for (let key in Object.keys(this.dataStore.sort())) {
      console.log(key + ' : ' + this.dataStore[key]);
    }
  }
}

export { Dictionary };
