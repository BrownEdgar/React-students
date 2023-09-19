import React from "react";

import { BiLogoFacebook } from "react-icons/bi";
import {
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <BiLogoFacebook />
        </li>
        <li>
          <AiOutlineTwitter />
        </li>
        <li>
          <AiOutlineGoogle />
        </li>
        <li>
          <AiOutlineInstagram />
        </li>
        
        <li>
          <BsYoutube />
        </li>
      </ul>
    </div>
  );
}
