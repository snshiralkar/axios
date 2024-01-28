import React, { useState } from "react";

const ShortCkt = () => {
  const [demo, setDemo] = useState("");
  return (
    <div>
      <h1>
        {demo || (
          <>
            <h1>mast</h1>
            <h2>welocme</h2>
          </>
        )}
      </h1>
      {/* <h1>{demo && "krishna"}</h1> */}
    </div>
  );
};

export default ShortCkt;
