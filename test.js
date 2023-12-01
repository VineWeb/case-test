/** @format */

const getTailZeroNum = (num) => {
  if (typeof num === "string") num = parseInt(num);
  let zeroCount = 0;
  while (num % 10 === 0) {
    zeroCount++;
    num = num / 10;
    if (num < 10) break;
  }
  return zeroCount;
};

const getMap = (regionCode) => {
  console.log(getTailZeroNum(regionCode))
  return 3 - Math.floor(getTailZeroNum(regionCode) / 2);
};

const map = getMap(100000);
const num = [121.50, 24].concat([50, 10])
console.log(map);
