import React from "react";

export default function Content() {
  return (
    <>
      <div className="content">
        <img className="box1" src={require("../assets/ban1.jpg")} />
        <div className="box2">
          <div className="head_title">Win a thousand Stars</div>
          <div className="head_body">
            We're giving away 1,000 Stars to 1,000 Starbucks Rewards members in
            our Million Starts Giveaway and much more all week!*
          </div>
          <div className="btn_play">Play to win</div>
        </div>
      </div>
      <div className="content2">
        <div className="inner_box">
          <div className="inner_box2">
            <div className="inner_box_title">
              A new way to earn sips and trips
            </div>
            <div className="inner_box_text">
              Now you can link your Starbucks® Rewards + Delta SkyMiles®
              accounts to get:
            </div>
            <ul>
              <li className="inner_box_text">
                150 Stars + 500 miles when you link before 12/31
              </li>
              <li className="inner_box_text">
                Double Stars on Delta travel days
              </li>
              <li className="inner_box_text">
                1 mile per $1 spent at Starbucks (excludes taxes and
                gratuities)**
              </li>
            </ul>

            <div className="btn_link">Link accounts</div>
          </div>
        </div>
        <img
          className="box1"
          src={
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81104.jpg"
          }
        />
      </div>
    </>
  );
}
