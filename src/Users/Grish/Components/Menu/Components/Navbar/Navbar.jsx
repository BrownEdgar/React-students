import { Link } from "react-router-dom";
import imgUser from "./images/userImage.jpg";
import ROUTES from "../../routes";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.HOME}>
                <div>
                  <p>B</p>
                </div>
                <div>
                  <p>B</p>
                </div>
                <div>
                  <p>C</p>
                </div>
              </Link>
            </li>
            <li>
              <img src={imgUser} alt="photo" />
              <Link to={ROUTES.SIGNIN}>Sign In</Link>
            </li>
            <li>
              <Link to={ROUTES.NEWS}>News</Link>
            </li>
            <li>
              <Link to={ROUTES.SPORT}>Sport</Link>
            </li>
            <li>
              <Link to={ROUTES.REEL}>Reel</Link>
            </li>
            <li>
              <Link to={ROUTES.WORKLIFE}>Worklife</Link>
            </li>
            <li>
              <Link to={ROUTES.TRAVEL}>Travel</Link>
            </li>
            <li>
              <Link to={ROUTES.FUTURE}>Future</Link>
            </li>
            <li>
              <Link to={ROUTES.MORE}>
                More
                <div className="drop-down">
                  <div className="drop-down-icon">
                    <IoMdArrowDropdown />
                  </div>
                  <div className="dropdown-content">
                    <ul className="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" >
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" >
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SEARCH}>
                <input type="text" placeholder="Search" />
                <FaSearch className="searchIcon" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
