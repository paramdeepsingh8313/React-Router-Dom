import React from "react";
import { useParams } from "react-router-dom";

function Page4() {
  const a = useParams();
  return (
    <div>
      Page4
      <h1>{a.id}</h1>
    </div>
  );
}

export default Page4;
