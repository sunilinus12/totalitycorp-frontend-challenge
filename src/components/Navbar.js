import React from "react";
import { ReactComponent as ReactLogo } from "../assets/starbucks.svg";
import { ReactComponent as Location } from "../assets/location.svg";
const items = [
  {
    name: "Menu",
  },
  {
    name: "rewards",
  },
  {
    name: "gift cards",
  },
];
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_inner">
        <div style={{ display: "flex", alignItems: "center" }}>
          <ReactLogo width={51} height={51} />
          {items.map((item, key) => {
            return (
              <div className="nav_item" key={key}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Location width={32} height={32}
          className="svglocation" />
          <div className="fas">Find a store</div>
          <div className="btn_sign">Sign in</div>
          <div className="btn">Join now</div>
        </div>
      </div>
    </div>
  );
}
