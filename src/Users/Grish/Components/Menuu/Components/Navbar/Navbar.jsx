import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Navbar.scss";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.AGENCYM4THEME}>AGENCYM 4 THEME</Link>
            </li>
            <li>
              <Link to={ROUTES.WATCHVIDEO}>WATCH VIDEO</Link>
            </li>
            <li>
              <Link to={ROUTES.MENUS}>
                MENUS
                <IoMdArrowDropdown className="drop-down" />
              </Link>
            </li>
            <li>
              <Link to={ROUTES.BLOCKS}>
                BLOCKS
                <IoMdArrowDropdown className="drop-down" />
                {/* <ul className="dropdown-content">
                  <li>
                    <Link>dasdas</Link>
                  </li>
                  <li>
                    <Link>dasdas</Link>
                  </li>
                  <li>
                    <Link>dasdas</Link>
                  </li>
                  <li>
                    <Link>dasdas</Link>
                  </li>
                  <li>
                    <Link>dasdas</Link>
                  </li>
                </ul> */}
              </Link>
            </li>
            <li>
              <Link to={ROUTES.BUYNOW}>
                <button>BUY NOW</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
