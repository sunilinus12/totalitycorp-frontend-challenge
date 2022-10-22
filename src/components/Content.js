import React from "react";
import { ReactComponent as Spotify } from "../assets/icon.svg";
import { ReactComponent as Facebook } from "../assets/fb.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Pa } from "../assets/p.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";
const Footer = [
  {
    name: "About Us",
    list: [
      "Our Company",
      "Our Coffee",
      "Stories and News",
      "Starbucks Archive",
      "Investor Relations",
      "Customer Service",
    ],
  },
  {
    name: "Careers",
    list: [
      "Culture and Values",
      "Inclusion,Diversity, and Equity",
      "College Achievement Plan",
      "Alumni Community",
      "U.S. Careers",
      "International Careers",
    ],
  },
  {
    name: "Social Impact",
    list: ["People", "Planet", "Environmental and Social Impact Reporting"],
  },
  {
    name: "For Business Partners",
    list: [
      "landlord Support Center",
      "Suppliers",
      "Corporate Gift Card Sales",
      "Office and Foodservice Cofee",
    ],
  },
  {
    name: "Order on the App",
    list: [
      "Order on the App",
      "Order on the Web",
      "Delivery",
      "Order and Pickup Options",
      "Explore and Find Coffee for Home",
    ],
  },
];

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

      <div className="content">
        <img
          className="box1"
          src={
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg"
          }
        />
        <div className="box3">
          <div className="center">
            <div className="inner_head_title">Perfectly </div>
            <div className="inner_head_title"> pumpkin </div>
            <div className="inner_head_body">
              Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold
              Brew.
            </div>
            <div className="btn_order">Order now</div>
          </div>
        </div>
      </div>

      <div className="content content_updated">
        <img
          className="box1"
          src={
            "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg"
          }
        />
        <div className="box3 ">
          <div className="center">
            <div className="inner_head_title">Layers of baked </div>
            <div className="inner_head_title"> apple yum </div>
            <div className="inner_head_body">
              Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
              Starbucks® Blonde Espresso.
            </div>
            <div className="btn_order">Learn more</div>
          </div>
        </div>
      </div>
      <div className="box_container">
        <div className="box_text">
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official Rules, visit starbucksstardays.com.
        </div>
        <div className="box_second_text">
          Entrants can receive a maximum of 2 entries per day.
        </div>
        <div className="box_third_text">
          **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit
          deltastarbucks.com/terms
        </div>
      </div>

      <div className="footer_container">
        <div className="footer_inner">
          {Footer.map((item, key) => {
            return (
              <div className="f1" key={key}>
                <div className="f_title">{item.name}</div>
                {item.list.map((item, key) => {
                  return (
                    <div className="f_li" key={key}>
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="hr"></div>

        <div className="footer_links">
          <div className="links">
            <Spotify width={32} height={32} />
          </div>
          <div className="links">
            <Facebook width={32} height={32} />
          </div>
          <div className="links">
            <Pa width={32} height={32} />
          </div>
          <div className="links">
            <Instagram width={32} height={32} />
          </div>
          <div className="links">
            <Youtube width={32} height={32} />
          </div>
          <div className="links">
            <Twitter width={32} height={32} />
          </div>
        </div>

        <div className="privacy">
          <div className="privacy_box">Privacy Policy</div>

          <div className="privacy_box">Terms of Use</div>

          <div className="privacy_box">CA Supply Chain Act</div>

          <div className="privacy_box">Cookie Preferences</div>
        </div>

        <div className="copyright">
        © 2022 Starbucks Coffee Company. All rights reserved.
        </div>
      </div>
    </>
  );
}
