import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Page5() {
  const [data, setData] = useState("");
  console.log(data);

  const [searchParam, setSearchParam] = useSearchParams();

  function handleChange() {
    // alert(data);

    //setting the query string in the URL
    setSearchParam({ country: data });

    //getting the query string from the URL
    const result = searchParam.get("country");
    alert(result);
  }

  return (
    <div>
      <h2>Welcome to Page5</h2>
      <input
        type="text"
        placeholder="Enter country"
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default Page5;
