import React from "react";
import cx from "classnames";

const mock = {
  1: 'MSM',
  2: 'Right of Way',
  3: 'Tailgating',
  4: 'Driving Difficulties',
  5: 'Zebra Crossing',
  6: 'Mandatory',


}

class DiceGame extends React.Component {
  constructor(props) {
    super(props);
    this.sides = [
      "translateZ(-100px) rotateY(0deg)",
      "translateZ(-100px) rotateX(-180deg)",
      "translateZ(-100px) rotateY(-90deg)",
      "translateZ(-100px) rotateY(90deg)",
      "translateZ(-100px) rotateX(-90deg)",
      "translateZ(-100px) rotateX(90deg)",
    ];
    this.handleClick = this.handleClick.bind(this);
    this.render = this.render.bind(this);
  }

  handleClick(e) {
    var die = document.getElementById("die");
    var wrapper = document.getElementById("wrapper");
    var sides = this.sides;

    die.classList.add("rolling");
    wrapper.classList.add("animate");

    setTimeout(function () {
      var roll = Math.floor(Math.random() * sides.length);
      die.classList.remove("rolling");
      wrapper.classList.remove("animate");
      die.style.transform = sides[roll];
    }, 750);
  }

  render() {
    let divs = this.sides.map((side, index) => {
      return <div className="side">{mock[index + 1]}</div>;
    });

    return (
      <div className="dice-game">
        <div id="wrapper" className="wrapper">
          <div className="die-container" onClick={this.handleClick}>
            <div id="die" className={"d" + this.sides.length}>
              {divs}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiceGame;
