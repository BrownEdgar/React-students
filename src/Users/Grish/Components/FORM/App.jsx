import { useState } from "react";
import Country from "./Country/Country";

import France from "./assets/france.jpeg";

import Georgia from "./assets/georgia.jpeg";
import Italy from "../../../../../src/assets/italy.jpeg";
import Spain from "../../../../../src/assets/spain.jpeg";

import "./App.css";

export default function App() {
  const [city] = useState([
    {
      id: 1,
      name: "france",
      img: France,
      description:
        "France is a semi-presidential republic with a head of government - the prime minister - appointed by the president who is the directly elected head of state. France’s territory consists of 18 administrative regions - 13 metropolitan (i.e. European France) and 5 overseas regions.",
    },
    {
      id: 2,
      name: "canada",
      img: './images/canada.jpeg',
      description:
        "The history of Canada covers the period from the arrival of the Paleo-Indians to North America thousands of years ago to the present day. The lands encompassing present-day Canada have been inhabited for millennia by Indigenous peoples, with distinct trade networks, spiritual beliefs, and styles of social organization.",
    },
    {
      id: 3,
      name: "georgia",
      img: Georgia,
      description:
        "On the southern slopes of the Caucasus Mountains, between the Black and Caspian Seas, live the freedom-loving Georgian people who lay claim to a long and exciting history. Forged amidst continual clashes with powerful empires, this small nation miraculously managed not only to band together and survive.",
    },
    {
      id: 4,
      name: "italy",
      img: Italy,
      description:
        "The formation of the modern Italian state began in 1861 with the unification of most of the peninsula under the House of Savoy (Piedmont-Sardinia) into the Kingdom of Italy. Italy incorporated Venetia and the former Papal States (including Rome) by 1871 following the Franco-Prussian War (1870-71).",
    },
    {
      id: 5,
      name: "spain",
      img: Spain,
      description:
        "Given its geographic location, Spain has experienced a rich and varied history. The first modern humans settled in what is now Spain over 35,000 years ago. The Roman conquest began in 218 BC and led to a far-reaching process of cultural assimilation, the repercussions of which continue to be felt today.",
    },
  ]);

  const [country, setCountry] = useState("");

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  const showCountry = city.find((city) => city.name === country);

  return (
    <div className="App">
      <select value={country} onChange={changeCountry}>
        <option value="" disabled></option>
        <option value="france">France</option>
        <option value="canada">Canada</option>
        <option value="georgia">Georgia</option>
        <option value="italy">Italy</option>
        <option value="spain">Spain</option>
      </select>
      {showCountry ? <Country country={showCountry} /> : null}
    </div>
  );
}
