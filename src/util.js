export const addZero = (num) => {
    let newNum = num < 10 ? '0' + num : num;
    return newNum;
  };

export const secToMin = (secondsIn) => {
    const min = Math.floor(secondsIn / 60);
    const sec = secondsIn - min * 60;
    const minSec = [min, sec];
    return minSec;
};
