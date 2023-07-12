bills = [4, 2, 19, 55, 23, 3, 7, 45, 77, 32, 1];
let tips = [];

const calculateTip = () => {
  bills.map((e) => {
    if (e >= 30) {
      tips.push(e * 0.15);
      return tips;
    } else {
      tips.push(e * 0.2);
      return tips;
    }
  });
};

calculateTip();
console.log(tips);
