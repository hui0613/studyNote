"use strict";
/**
 * 使用类型、接口、类、泛型封装统一操作 mysql、mongodb底层库
 *
 * 定义一个操作数据库的库，支持 mysql、mongodb
 *
 * 使用接口约束规范
 *
 * 泛型实现代码重用
 */
/**
 *  定义一个操作 mysql 的类
 *  要实现泛型接口，这个类也必须是泛型类
 */
var mysqlDB = /** @class */ (function () {
    function mysqlDB() {
    }
    mysqlDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    mysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    mysqlDB.prototype.delete = function (info, id) {
        throw new Error("Method not implemented.");
    };
    mysqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return mysqlDB;
}());
var mongoDB = /** @class */ (function () {
    function mongoDB() {
    }
    mongoDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    mongoDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    mongoDB.prototype.delete = function (info, id) {
        throw new Error("Method not implemented.");
    };
    mongoDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return mongoDB;
}());
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var user = new Users();
user.username = "zs";
user.password = "123";
var mysql = new mysqlDB();
mysql.add(user);
