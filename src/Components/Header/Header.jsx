import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./logo.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" >
            <span>
              <h2 data-aos="fade-right" className="naresh-logo">{"< Nareshbabu />"} </h2>
            </span>
           
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};