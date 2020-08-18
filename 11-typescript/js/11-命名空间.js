"use strict";
/**
 *
 */
var a1;
(function (a1) {
    function dmeo() {
        console.log("a.demo");
    }
    a1.dmeo = dmeo;
})(a1 || (a1 = {}));
var b;
(function (b) {
    function demo() {
        console.log("b.demo");
    }
    b.demo = demo;
})(b || (b = {}));
a1.dmeo();
b.demo();
