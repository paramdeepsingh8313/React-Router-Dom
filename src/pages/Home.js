import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const id = 100000001;

  function Page3(parameters) {
    alert(parameters);
    Navigate(`/page4/${parameters}`);
  }

  return (
    <div>
      Home
      <br />
      <NavLink
        to="/page1"
        state={{
          data: "I am navigating to page 1 from home Page",
          name: "Roshan",
        }}
      >
        Go to Page 1
      </NavLink>
      <br />
      <br />
      <NavLink to={"/page2/50000001"}>Go to Page2</NavLink>
      <br />
      <br />
      <NavLink to={`/page3/${id}`}>Go to Page3</NavLink>
      <br />
      <br />
      <button
        onClick={() => {
          Page3("Roshan");
        }}
      >
        Page 4
      </button>
      <br />
      <br />
      <NavLink to="/page5">Go to Page 5</NavLink>
    </div>
  );
}

export default Home;
