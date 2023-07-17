function setter(aryUnits) {
  for (var i = 0; i < aryUnits.length; i++) {
    var id = i + 1;
    aryUnits[i] = new Object();
    aryUnits[i].getId = function () {
      return id;
    };
  }
}

var ary = new Array(5);
setter(ary);
document.write(ary[3].getId());
