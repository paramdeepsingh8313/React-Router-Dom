import React from "react";
import { useLocation } from "react-router-dom";

function Page1() {
  let result = useLocation();
  console.log(result.state.data);

  return (
    <div>
      Page1
      <h1>{result.state.data}</h1>
      <h1>{result.state.name}</h1>
    </div>
  );
}

export default Page1;
