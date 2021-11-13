import React from "react";

function AllColorImg() {
  const rgbRange = [];
  for (let i = 1; i < 256; i += 8) {
    rgbRange.push(i);
  }
  const rgbData = cartesian(rgbRange, rgbRange, rgbRange); //all the color value array
  function cartesian(...args) {
    var r = [],
      max = args.length - 1;
    function helper(arr, i) {
      for (var j = 0, l = args[i].length; j < l; j++) {
        var a = arr.slice(0);
        a.push(args[i][j]);
        if (i === max) r.push(a);
        else helper(a, i + 1);
      }
    }
    helper([], 0);
    return r;
  }
  return (
    <div style={{ width: "256px", height: "128px" }}>
      {rgbData.map((colour, index) => {
        return (
          <div
            key={index}
            id={index}
            style={{
              backgroundColor: `rgb(${colour})`,
              width: "1px",
              height: "1px",
              display: "inline-block",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default AllColorImg;
