import React from "react";
import AppBar from "./components/AppBar";
import HeaderSVG from "./components/HeaderSVG";
import "./styles.css";
import chat_img from "./chat.svg";

export default function App() {
  let header_styles = {
    backgroundImg: chat_img
  };
  let header_text = "Que tus clientes no te pierdan de vista";
  return (
    <>
      <div className="container">
        <AppBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="position-relative mt-sm-2">
              <div className="header mx-auto text-center">
                <h1 className="text-lg-left display-3 header-text font-weight-bold d-block mt-4 d-lg-none">
                  {header_text}
                </h1>
                <HeaderSVG />
                <h1 className="position-absolute display-2 font-weight-bold  text-md-left mb-4 header-text w-50 d-none d-lg-block">
                  {header_text}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="NuestrosServicios container-fluid mt-5">
        <div className="row row-cols-1 pt-5">
          <div className="col">
            <h1 className="text-center font-weight-bold">
              Bienviendo a Verabot
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
