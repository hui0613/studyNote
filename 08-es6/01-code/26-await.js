/**
 *
 * await 必须写在 async 函数中
 *
 */

const p = new Promise((resolve, reject) => {
  resolve("成功");
});

async function main() {
  let result = await p;
  console.log(result);
}

main(0);
