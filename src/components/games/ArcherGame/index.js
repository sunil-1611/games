import React, { useState } from "react";
import cx from "classnames";
const Bow = ({ active }) => (
  <div class="bow">
    <div class={cx("main-string", { active })}></div>
    <div class={cx("main-string", { active })}></div>
    <div class="top-end-viewB">
      <div class="top-end"></div>
    </div>
    <div class="top-end-string-wrap">
      <div class="string-wrap"></div>
      <div class="string-wrap"></div>
      <div class="string-wrap"></div>
    </div>
    <div class="viewB-1">
      <div class="grab">
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
        <div class="grab-wrap"></div>
      </div>
    </div>
    <div class="bottom-end-string-wrap">
      <div class="string-wrap"></div>
      <div class="string-wrap"></div>
      <div class="string-wrap"></div>
    </div>
    <div class="bottom-end-viewB">
      <div class="bottom-end"></div>
    </div>
  </div>
);
const Arrow = ({ active = false }) => (
  <div class={cx("arrow", { active })}>
    <div class="arrow-middle"></div>
    <div class="tail">
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-top"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
      <div class="tail-detail-bottom"></div>
    </div>
  </div>
);

const DartBoard = () => (
  <div class="dart-board">
    <div class="wrap">
      <div class="layer-0"></div>
      <div class="layer-1"></div>
      <div class="layer-2"></div>
      <div class="layer-3"></div>
      <div class="layer-4"></div>
      <div class="layer-5"></div>
    </div>
  </div>
);

const ArcherGame = () => {
  const [isMove, setIsMove] = useState(false);
  const toogleMove = () => setIsMove((previous) => !previous);
  return (
    <div className="archer-game">
      <div class="main-container">
        <div class="quiver">
          <div class="clip">
            <div class="frag"></div>
          </div>
          <div class="clip">
            <div class="frag"></div>
          </div>
          <div class="clip">
            <div class="frag"></div>
          </div>
          <div class="clip">
            <div class="frag"></div>
          </div>
          <div class="clip">
            <div class="frag"></div>
          </div>
          <div class="clip">
            <div class="frag"></div>
          </div>
        </div>
        <div class="arrows-in-quiver">
          <div class="arrow-in-quiver">
            <div class="arrow-middle"></div>
            <div class="tail">
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
            </div>
          </div>
          <div class="arrow-in-quiver">
            <div class="arrow-middle"></div>
            <div class="tail">
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
            </div>
          </div>
          <div class="arrow-in-quiver">
            <div class="arrow-middle"></div>
            <div class="tail">
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-top"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
              <div class="tail-detail-bottom"></div>
            </div>
          </div>
        </div>
        <div class="bow-and-arrow">
          <Bow active={isMove} />
          <Arrow active={isMove} />
          <DartBoard />
        </div>
      </div>
      <center>
        <button className="toggleBtn" onClick={toogleMove}>
          Toogle Move
        </button>
      </center>
    </div>
  );
};
export default ArcherGame;
