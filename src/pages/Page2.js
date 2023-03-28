import React from "react";
import { useParams } from "react-router-dom";

function Page2() {
  let result = useParams();
  console.log(result);
  return (
    <div>
      Page2
      <h1>{result.variable_name}</h1>
    </div>
  );
}

export default Page2;
