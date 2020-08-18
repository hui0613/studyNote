/**
 * 使用类型、接口、类、泛型封装统一操作 mysql、mongodb底层库
 *
 * 定义一个操作数据库的库，支持 mysql、mongodb
 *
 * 使用接口约束规范
 *
 * 泛型实现代码重用
 */

interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(info: T, id: number): boolean;
  get(id: number): any[];
}

/**
 *  定义一个操作 mysql 的类
 *  要实现泛型接口，这个类也必须是泛型类
 */

class mysqlDB<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class mongoDB<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class Users {
  username: string | undefined;
  password: string | undefined;
}

let user = new Users();
user.username = "zs";
user.password = "123";

let mysql = new mysqlDB<Users>();
mysql.add(user);
