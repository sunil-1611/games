import React, { useEffect } from "react";
import Stop from '../../../assets/images/Stop.png'
import CompAhead from '../../../assets/images/CompAhead.png'
import CompKeep from '../../../assets/images/CompKeep.png'
import GapMedian from '../../../assets/images/GapMedian.png'
import GiveWay from '../../../assets/images/GiveWay.png'
import GoingStraight from '../../../assets/images/GoingStraight.png'
import NoEntry from '../../../assets/images/NoEntry.png'
import NoParking from '../../../assets/images/NoParking.png'
import NoStopping from '../../../assets/images/NoStopping.png'
import ParkingBoth from '../../../assets/images/ParkingBoth.png'
import RoadWidens from '../../../assets/images/RoadWidens.png'
import RoadWidth from '../../../assets/images/RoadWidth.png'
import RoundAbout from '../../../assets/images/RoundAbout.png'
import SlipparyRoad from '../../../assets/images/SlipparyRoad.png'
import VehiclesProh from '../../../assets/images/VehiclesProh.png'

const ShuffleGame = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/shuffle.js";
    script.id = "libraryName";
    document.body.appendChild(script);
  });
  return (
    <div className="shuffle">
      <div class="container">
        <div class="polaroid">
          <div class="polaroid-container">
            <div id="red" class="polaroid-item top-image">
              <div class="polaroid-item__image">
              <div>
              <img src={CompAhead} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Compulsary Ahead or Turn Left</p>
              </div>
            </div>
            <div id="blue" class="polaroid-item">
              <div class="polaroid-item__image">
              <div>
              <img src={CompKeep} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Compulsary Keep Left</p>
              </div>
            </div>
            <div id="green" class="polaroid-item">
              <div class="polaroid-item__image">
              <div>
              <img src={GapMedian} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Gap in Median</p>
              </div>
            </div>
            <div id="gray" class="polaroid-item">
              <div class="polaroid-item__image">
              <div>
              <img src={GiveWay} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Give Way</p>
              </div>
            </div>
            <div id="purple" class="polaroid-item">
              <div class="polaroid-item__image">
              <div>
              <img src={GoingStraight} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Going Straight Prohibted</p>
              </div>
            </div>
            <div id="yellow" class="polaroid-item">
              <div class="polaroid-item__image">
              <div>
              <img src={NoEntry} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>No Entry</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={NoParking} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>No Parking</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={NoStopping} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>No Stopping No Parking</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={ParkingBoth} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Parking Both Side</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={RoadWidens} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Road Widens Ahead</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={RoadWidth} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Road Width limit</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={RoundAbout} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Round About</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={SlipparyRoad} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Slippary Road Ahead</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={Stop} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Stop</p>
              </div>
            </div>
            <div id="orange" class="polaroid-item">
              <div class="polaroid-item__image">
                <div>
              <img src={VehiclesProh} height={250} />
              </div>
              </div>
              <div class="polaroid-item__copy">
                <p>Vehicles Prohibted in Both Directions</p>
              </div>
            </div>
          </div>
        </div>
        <div class="select-container">
          <form>
            <select id="color">
              <option value="red" selected>
                Red
              </option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="gray">Gray</option>
              <option value="purple">Purple</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Stop</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShuffleGame;
