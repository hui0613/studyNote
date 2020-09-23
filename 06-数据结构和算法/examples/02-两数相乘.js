function mutifly(a, b) {
  a = a + '';
  b = b + '';
  let arrA = a.split(''),
    arrB = b.split('');
  let carry = 0,
    temp = 0,
    res = [];
  for (let i = arrA.length - 1; i >= 0; i--) {
    for (let j = arrB.length - 1; j >= 0; j--) {
      temp = +arrA[i] * +arrB[j] + carry;
      //   console.log(temp);

      let index = i + j + 1;
      if (res[index]) {
        res[index] += temp;

        if (res[index] >= 10) {
          carry = parseInt(res[index] / 10);
          res[index] = res[index] % 10;
        } else {
          carry = 0;
        }
        if (carry) {
          if (res[index - 1]) {
            res[index - 1] += carry;
          } else {
            res[index - 1] = carry;
          }
        }
      } else {
        res[index] = temp;
      }
    }
  }
  //   console.log(res);
  //   for (let i = res.length - 1; i >= 0; i--) {
  //     if (res[i] >= 10) {
  //       carry = parseInt(res[i] / 10);
  //       res[i] = res[i] % 10;
  //     } else {
  //       carry = 0;
  //     }
  //     if (carry) {
  //       if (res[i - 1]) {
  //         res[i - 1] += carry;
  //       } else {
  //         res[i - 1] = carry;
  //       }
  //     }
  //   }
  return res.join('').replace(/^0+/, '') === ''
    ? '0'
    : res.join('').replace(/^0+/, '');
}

console.log(mutifly(9, 9));
