const test1 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};
// 5 5 5 5 5

const test2 = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

// 0 1 2 3 4

const test3 = () => {
  for (var i = 0; i < 5; i++) {
    (function (index) {
      setTimeout(() => console.log(index), 1000);
    })(i);
  }
};
// 0 1 2 3 4

const test4 = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i),
      1000
    );
  }
};

test1();
// test2()
// test3()
// test4()
