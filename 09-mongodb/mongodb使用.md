## 查看所有的数据库 `show dbs`

## 切换数据库（集合） `use test`

> test 为数据库的名称，若数据库不存在则会新建数据库,新建数据库时要新增数据时才会建立数据库

## 往数据库中创建表

`db.${表名}.insert({"key":"value"})`

## 查看数据库中的表

`show collections;`

## 查看数据

### 查看所有数据

`db.${表名}.find()`

### 查找特定的数据

#### 等值查找

`db.${表名}.find({key:value})`

#### 范围查找

- 查找大于某值的数据
  `db.${表名}.find({key:{$gt:value}})`

- 查找小于某值的数据
  `db.${表名}.find({key:{$lt:value}})`

- 查找大于等于某值的数据
  `db.${表名}.find({key:{$gte:value}})`

- 查找大于等于某值的数据
  `db.${表名}.find({key:{$lte:value}})`
- 在某范围内查找
  `db.${表名}.find({key:{$lte:values,$gte:values}})`

### 更新数据

`db.${表名}.update({key,value},{$set:{key:newValue})`

### 删除数据

`db.${表名}.remove({key,value})`

## 删除数据库

### 首先进入要删除的数据库

`use test`

### 删除数据库

`db.dropDatabase()`

## 开启数据库权限验证

### 开启验证配置

- 修改 mongodb 配置文件

  `sduo gedit /etc/mongodb.conf`

  ```
  # Turn on/off security.  Off is currently the default
  #noauth = true
  auth = true
  ```

### 创建超级管理员（对所有的数据库具有读写权限）

- 进入 admin 数据库

  `use admin;`

- 创建用户和设置密码

  ```
  db.createUser({ user: "root", pwd: "123456", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
  ```

### 为单个数据库创建用户

- 进入 admin 数据库

  `use admin;`

- 使用超级管理员的登录

  `db.auth('root','123456')`

- 进入需要添加用户的数据库

  `use test`

- 创建用户赋予读写权限

  ```
  db.createUser({ user: "test", pwd: "123456", roles: [{ role: "readWrite",db:"test"}] })
  ```

### 修改了配置文件需要重启 mongodb 服务

`systemctl restart mongodb.service`

