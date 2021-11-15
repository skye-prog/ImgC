import React from "react";

function AllColorImg() {
  //Get R, G, B values
  function rgbRange(start) {
    const r = [];
    for (let i = start; i < 256; i += 8) {
      r.push(i);
    }
    return r;
  }

  //Get all the rgb colors
  function cartesian(...array) {
    const r = [],
      max = array.length - 1;
    function helper(arr, i) {
      for (let j = 0, l = array[i].length; j < l; j++) {
        const a = arr.slice(0);
        a.push(array[i][j]);
        if (i === max) r.push(a);
        else helper(a, i + 1);
      }
    }
    helper([], 0);
    return r;
  }

  // shuffle color array
  function shuffle(array) {
    const r = array.slice(0);
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }
  const rgbData = cartesian(rgbRange(1), rgbRange(2), rgbRange(3)); //all the color value array
  const shufflergbData = shuffle(rgbData); //shuffled array

  return (
    <div
      style={{
        width: "80%",
        margin: " 40px  auto",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {shufflergbData.map((colour, index) => {
        return (
          <div
            key={index}
            id={index}
            style={{
              backgroundColor: `rgb(${colour})`,
              width: "3px",
              height: "3px",
              margin: "1px",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default AllColorImg;
