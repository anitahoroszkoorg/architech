import { jsx } from "@emotion/react";
import React from "react";

function Test({ form1, form2 }: { form1: JSX.Element; form2?: JSX.Element }) {
  return (
    <div>
      <div>{form1}</div>
      {form2 ? <div style={{ backgroundColor: "grey" }}>{form2}</div> : null}
    </div>
  );
}

export default Test;
