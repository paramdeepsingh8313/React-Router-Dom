import React from "react";
import { Link } from "react-router-dom";

function Paths() {
  return (
    <div>
      <br />
      <br />
      <div>
        <Link to={"/"}>Home</Link>
      </div>

      <div>
        <Link to="/page1">Page1</Link>
      </div>
      <div>
        <Link to="/page2">Page2</Link>
      </div>
      <div>
        <Link to="/page3">Page3</Link>
      </div>
    </div>
  );
}

export default Paths;
