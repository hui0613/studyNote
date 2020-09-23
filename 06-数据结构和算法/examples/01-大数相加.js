function sumString(a, b) {
  a = a + '';
  b = b + '';

  let l1 = a.split(''),
    l2 = b.split('');
  let distance = l1.length - l2.length;
  if (distance > 0) {
    for (let i = 0; i < distance; i++) {
      l2.unshift('0');
    }
  } else {
    for (let i = 0; i < Math.abs(distance); i++) {
      l1.unshift('0');
    }
  }
  console.log(l1, l2);
  let res = [],
    temp = '',
    carry = 0; // 进位标志
  for (let i = l1.length - 1; i >= 0; i--) {
    temp = +l1[i] + +l2[i] + carry;
    if (temp >= 10) {
      carry = 1;

      res.unshift(temp % 10);
    } else {
      carry = 0;
      res.unshift(temp);
    }
    console.log(res);
  }
  //   console.log(res);
  if (carry) {
    res.unshift(carry);
  }
  return res.join('');
}
