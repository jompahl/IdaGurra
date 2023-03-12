import React from "react";
import CountDownTimer from "./countDownTimer";

const Navbar = () => {
  function getMs() {
    const date = new Date("May 13, 2023 16:30:00");
    let ms = date.getTime();
    return ms;
  }

  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "20%",
          minWidth: "350px",
          height: "100%",
        }}
      >
        <h2
          style={{
            color: "rgb(233,233,233)",
            fontFamily: "",
            display: "flex",
            margin: "0px",
            padding: "0px",
          }}
        >
          Bröllop
        </h2>
        <h2
          style={{
            color: "rgb(233,233,233)",
            fontFamily: "",
            display: "flex",
            margin: "0px",
            padding: "0px",
          }}
        >
          {/* <CountDownTimer countdownTimestampMs={getMs()} /> */}
          Ida & Gustav
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
