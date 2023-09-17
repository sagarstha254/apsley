import React from "react";
import "./Recipe1.css";
import { HashLink as Link } from "react-router-hash-link";

const Recipe = () => {
  return (
    <>
      <div className="main" id="recipe">
        <div className="header">
          <h1 className="h1"> Our Delicious and Special Recipe </h1>
          <h1 className="h2">
            <b>Apsley Arms Hotel</b>
          </h1>
          <p className="p">
            {" "}
            The hotel's recipes make it unique in taste and stands out among
            other.
            <br />
            <b>Customer once, Family the next</b>
          </p>
        </div>

        <div className="recipe">
          <div className="rec1">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/food1.jpg" alt="Image 1" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Lamb Cutlet</h1>

              <p>
                Lamb Cutlets’ with beetroot purée miso paste, pestoand mash by
                Chef Sammy.
              </p>
            </div>
          </div>

          <div className="rec2">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/food1.jpg" alt="Image 2" />
            </div>
            <div classname="descripton">
              <h1 className="desh1"> Broccolini</h1>

              <p>
                Broccolini is milder and sweeter than broccoli, with firm,
                crunchy stems, and leafy florets{" "}
              </p>
            </div>
          </div>
          <div className="rec3">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/food.png" alt="Image 3" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Fish Salad</h1>

              <p>
                Food is any substance consumed by an organism for nutritional
                support.{" "}
              </p>
            </div>
          </div>

          <div className="rec4">
            <div className="price">
              <p>$12</p>
            </div>
            <div>
              <img src="Images/food.png" alt="Image 4" />
            </div>
            <div classname="descripton">
              <h1 className="desh1">Pizza</h1>

              <p>
                Food is any substance consumed by an organism for nutritional
                support.
              </p>
            </div>
          </div>
        </div>

        <div className="inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="48"
            viewBox="0 0 86 48"
            fill="none"
            className="firstSvg"
          >
            <path
              d="M82.6078 2.50606L58.4402 31.3715L34.4064 11.7846L3 45.1616"
              stroke="#DAE952"
              strokeWidth="7"
            />
          </svg>
          <div className="first">
            <img src="Images/food.png" alt="Image 1" />
          </div>

          <div className="second">
            <h1>
              <b>
                Welcome to our <br></br>Apsley Arms Hotel
              </b>
            </h1>
            <p>
              The Apsley Arms Hotel is a charming and<br></br> luxurious
              establishment located in the heart of<br></br> a picturesque
              countryside. Nestled amidst <br></br>rolling hills and surrounded
              by lush greenery,<br></br> this hotel offers a serene and idyllic
              retreat for<br></br> travelers seeking both relaxation and{" "}
              <br></br>adventure.
            </p>
            <br />
            <Link to="/product">
              <button className="button">Find more</button>
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="20"
            viewBox="0 0 86 48"
            fill="none"
            className="secondSvg"
          >
            <path
              d="M82.6078 2.50606L58.4402 31.3715L34.4064 11.7846L3 45.1616"
              stroke="#DAE952"
              strokeWidth="7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Recipe;
