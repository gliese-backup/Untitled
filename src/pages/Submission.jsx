import React from "react";
import { Link, useLocation } from "react-router-dom";

function Submission() {
  const location = useLocation();
  console.log(location.state.data);
  return (
    <div>
      <h1>Submission</h1>
      <Link to="/error" className="bg-blue-500" state={{ name: "Monster" }}>
        Go to error page
      </Link>
    </div>
  );
}

export default Submission;
