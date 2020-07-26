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

## 删除数据库

### 首先进入要删除的数据库

`use test`

### 删除数据库

`db.dropDatabase()`
