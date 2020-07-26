//引入mongodb
const { MongoClient } = require("mongodb");

//定义数据库的链接地址
const url = "mongodb://127.0.0.1:27017";

//定义要操作的数据库

const dbName = "test";

//实例化 mongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

//连接数据库
client.connect((err) => {
  if (err) {
    console.log("数据库连接错误");
    return;
  }
  console.log("数据库连接成功");
  //切换到指定数据库
  let db = client.db(dbName);
  //   查询数据
  db.collection("user")
    .find({})
    .toArray((err, data) => {
      if (err) {
        console.log("查询失败");
        throw err;
      }
      console.log(data);
      //   client.close();
    });

  // 增加一条数据
  //   db.collection("user").insertOne({ name: "wlw" }, (err, result) => {
  //     if (err) {
  //       console.log("增加数据失败");
  //       throw err;
  //     }
  //     // console.log(result);
  //     // client.close();
  //   });

  //   修改数据
  //   db.collection("user").updateOne(
  //     { name: "wlw" },
  //     { $set: { name: "zhangsan" } },
  //     (err, result) => {
  //       if (err) {
  //         console.log("修改失败");
  //         throw err;
  //       }
  //       //   console.log(result);
  //       client.close();
  //     }
  //   );

  //   删除一条数据
  db.collection("user").deleteOne({ name: "wlw" }, (err, result) => {
    if (err) {
      console.log("删除失败");
      throw err;
    }
    // console.log(result);
    console.log("删除成功");
    client.close();
  });

  //   删除多条数据
  db.collection("user").deleteMany({ name: "ls" }, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("删除成功");
  });
  //操作完数据库后关闭数据库连接
  //   client.close();
});
