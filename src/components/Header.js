import { Link } from "react-router-dom";
import Marvel_logo from "../images/Marvel_Logo.svg";
import Marvel_banner from "../images/Marvel_banner.jpeg";
import { useEffect, useState } from "react";

const Header = (event) => {
  const [title, setTitle] = useState();

  return (
    <div>
      <Link to="/home">
        <div className="upperheader">
          <img src={Marvel_logo} alt="marvel_logo" />
        </div>
      </Link>
      <div className="bottomheader">
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/signup">
          <button>SIGNUP</button>
        </Link>

        <input
          className="searchbar"
          type="text"
          value={title}
          placeholder="Recherche un super héro !"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>

        <Link to="/comics">
          <button>COMICS</button>
        </Link>
        <Link to="/characters">
          <button>CHARACTERS</button>
        </Link>
      </div>
      <div className="banner">
        <img src={Marvel_banner} alt="" />
      </div>
    </div>
  );
};

export default Header;
