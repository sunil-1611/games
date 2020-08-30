import React, { useEffect } from "react";
import cx from "classnames";
import Circle from "../../circle";

const SpinGame = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/spin.js";
    script.id = "libraryName";
    document.body.appendChild(script);
  });
  return (
    <div>
      <div class="fortune">
        <div id="fortune-wheel"></div>
        <div id="awardresult">
          <h5>START</h5>
        </div>
      </div>

      {/* <Circle /> */}
    </div>
  );
};
export default SpinGame;
