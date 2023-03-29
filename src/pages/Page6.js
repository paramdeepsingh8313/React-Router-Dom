import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Page6() {
  const result = useParams();

  const output = useLocation();

  console.log("output", output.state.data);

  console.log(result);
  return (
    <div>
      Page6
      <h2>{result.id}</h2>
      <h2> {output.state.data} </h2>
    </div>
  );
}

export default Page6;
