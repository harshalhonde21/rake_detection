import React from "react";
import Svg from "../components/Svg";
import "../Styles/RakeForm.css";

export default function RakeForm() {
  return (
    <>
      <div className="rake-form">
        {/* RakeForm */}
        <form className="rake-form-inputs">
          <div className="r-inputs">
            <div className="ri">
              <span>Rake No</span>
              <input type="text" />
            </div>
            <div className="ri">
              <span>Rake Arrival Time</span>
              <input type="text" />
            </div>
            <div className="ri">
              <span>Company Name</span>
              <input type="text" />
            </div>
            <div className="ri">
              <span>Arrival Date</span>
              <input type="text" />
            </div>
            <div className="ri">
              <span>Siding</span>
              <input type="text" />
            </div>
            <div className="ri">
              <span>Placement Date/Time</span>
              <input type="text" />
            </div>
          </div>
          <div className="r-btn">
            {/* <input type="button" value="Submit" /> */}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Svg />
    </>
  );
}
