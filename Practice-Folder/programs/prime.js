let flag = false;
function checkPrime(num) {
  if (num == 1 || num == 0) {
    console.log(`${num} is not prime or nor composit`);
  } else {
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      console.log(`${num} is prime`);
    } else {
      console.log(`${num} is not prime`);
    }
  }
}
checkPrime(2);
