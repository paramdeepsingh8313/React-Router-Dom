import React from "react";
import { useParams } from "react-router-dom";

function Page3() {
  const result = useParams();
  console.log(result);
  return (
    <div>
      Page3
      <h1>{result.id}</h1>
    </div>
  );
}

export default Page3;
