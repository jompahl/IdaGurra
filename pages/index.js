import Navbar from "../components/navbar";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import React, { useState } from "react";

export default function Home() {
  const [solved, setText] = useState(true);

  const set = () => {
    setText(true);
  };

  function handleClick() {
    window.location =
      "mailto:saragrottling@gmail.com ? &subject=Lillet 40 år &body=Va kul med fest Maria!%0D%0DJag/Vi kommer! (skriv namn):%0D%0DTyvärr Maria, vi kan inte komma (skriv namn):%0D%0DAllergier/Specialkost (skriv namn):%0D%0DJag/Vi vill boka hotellrum, antal rum:%0D%0DJa! Jag/Vi vill gärna dyka in tidigt och äta lunch på Gottskär Hotell, antal:%0D%0DJa! Jag vill ha storstyrk i minigolf av Lillet! (ja/nej)%0D%0DVi/Jag kommer lagom till fördrinken <3 (ja/nej)";
  }

  function showInMapClicked(party) {
    if (party) {
      window.open(
        "https://www.google.com/maps/place/Oxhallen/@56.0340525,12.703821,15z/data=!4m6!3m5!1s0x465233b10a2dd2fd:0x9295cf2a529c2425!8m2!3d56.0340525!4d12.703821!16s%2Fg%2F11bycj7zt9"
      );
    } else {
      window.open(
        "https://www.google.com/maps/place/Gustav+Adolfs+kyrka/@56.0384219,12.7024351,15z/data=!4m6!3m5!1s0x465233b386970217:0x6b31b910b3cdff7a!8m2!3d56.0384219!4d12.7024351!16s%2Fg%2F122jqjt1"
      );
    }
  }

  function openLink(link) {
    window.open(link);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: solved ? "100%" : "100vh",
        width: "100%",
        background:
          "linear-gradient(0deg, rgb(233,233,233), rgba(233, 233, 233, 0.5)), url(/images/sunset.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>
      {solved ? (
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="imageContainer">
            <div className="image">
              <img src="/images/strand.jpg"></img>
            </div>
          </div>
          <div className="textContainer">
            <p>
              <b
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Nu är det äntligen dags att fira vår kärlek och ni är varmt
                välkomna!
                <br></br>
                <br></br>3 JUNI 2023
              </b>
              <br></br>
              <b>Vigsel:</b> Vigseln börjar kl. 13.00 i Gustav Adolfs kyrka,
              <a onClick={() => showInMapClicked(false)}>
                {" "}
                Carl Krooks gata 36
              </a>
              <br></br>
              <b>Fest:</b> Middag och fest i Oxhallen,{" "}
              <a onClick={() => showInMapClicked(true)}> Bredgatan 25</a>
              <br></br>
              <b>Klädsel:</b> Kavaj <br></br>
              <br></br>
              Kontakta våra fantastiska toastmasters{" "}
              <a href="mailto:toastsson@gmail.com">
                Tobias och Johan (toastsson@gmail.com)
              </a>{" "}
              om ni vill hålla tal eller göra något annat för oss under dagen.
              Meddela dem senast 7 maj.
              <br></br>
              <br></br>
              Sjävklart tycker vi om barn men just idag önskar vi att de stannar
              hemma. Små bebisar är naturligtvis välkomna.
              <br></br>
              <br></br>
              Det finaste för oss är såklart att få fira vår stora dag
              tillsammans med er. Vill ni ge oss någonting så önskar vi gärna
              bidrag till en resa, en upplevelse eller presentkort på
              restaurang. Vårt bröllopskonto (Länsförsäkringar): 9060.35.431.97
              <br></br>
              <br></br>
              Från Helsingborg C till Gustav Adolfs kyrka tar det ca 10 minuter
              att promenera. Från kyrkan är det sedan 10 minuters gemensam
              promenad till Oxhallen. Det finns gott om gratis parkeringsplatser
              utanför Oxhallen (se karta).
              {/* Frågor besvaras på{" "}
              <a href="mailto:saragrottling@gmail.com">
                saragrottling@gmail.com
              </a> */}
              <br></br>
              <br></br>
              <p>
                <b style={{ display: "flex", justifyContent: "center" }}>
                  OSA:
                </b>{" "}
                Senast 26 mars för er som inte redan har meddelat. Informera oss
                samtidigt om eventuella allergier och matpreferenser
              </p>
            </p>

            <div className="map" style={{ marginBottom: "50px" }}>
              <img src="/images/karta.jpg"></img>
            </div>

            {/* <StaticGoogleMap
              size="600x600"
              apiKey="AIzaSyBY3NyQJO8KUYmIoQanyPF5ozjSPdF7d4Y"
              className="map"
            >
              <Marker.Group label="L" color="green">
                <Marker location="56.034052,12.703821" />
              </Marker.Group>
            </StaticGoogleMap> */}
            {/* <p>
              Adress:{" "}
              <a onClick={() => showInMapClicked()}>Landstormsvägen 31</a>
            </p> */}

            {/* <button
              style={{
                width: "80%",
                color: "rgb(233,233,233)",
                backgroundColor: "rgb(100,143,123)",
                borderRadius: "5px",
                padding: "4px",
                border: "0px",
                marginBottom: "30px",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleClick()}
              >
                OSA
              </h3>
            </button> */}
          </div>
        </div>
      ) : (
        <div className="puzzleContainer">
          <h4 style={{ textAlign: "center", margin: "2px" }}>
            Pussla ihop oss!
          </h4>
          <div
            style={{
              border: "3px solid rgb(100,143,123)",
              margin: "6px",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <JigsawPuzzle
              imageSrc="/images/kanot.jpg"
              rows={3}
              columns={3}
              onSolved={set}
              className="jigsaw-puzzle"
            />
          </div>
        </div>
      )}
    </div>
  );
}
