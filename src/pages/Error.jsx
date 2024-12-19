import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.name);
  return (
    <div>
      <h1>Error</h1>
      <button
        onClick={() =>
          navigate("/submission", {
            state: {
              data: "Carryminati",
            },
          })
        }
        className="bg-red-500"
      >
        Go to Submission
      </button>
    </div>
  );
}

export default Error;
