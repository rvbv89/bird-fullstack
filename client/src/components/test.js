let plusMinus = function plusMinus(arr) {
  // Write your code here
  arr.forEach((n) => {
    if (n < 0) {
      neg.push(n);
    } else if (n > 0) {
      pos.push(n);
    } else {
      zero.push(n);
    }
  });
};
