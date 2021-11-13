function rgbRange() {
  const rgbRange = [];
  for (let i = 1; i < 256; i += 8) {
    rgbRange.push(i);
  }
  const rgbData = cartesian(rgbRange, rgbRange, rgbRange);
  return rgbData;
}

function cartesian(...args) {
  var r = [],
    max = args.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = args[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i === max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}
rgbRange();

// console.log(slenth);
