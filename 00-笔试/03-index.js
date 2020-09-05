var name = "zs";
var person = {
  name: "wang",
  pro: {
    name: "li",
    getName: function () {
      console.log(this.name);
      return this.name;
    },
  },
};

console.log(person.pro.getName()); //undefined
var people = person.pro.getName;
console.log(people()); //zs
console.log(name.__proto__);

console.log(null == undefined);
console.log(typeof NaN);
