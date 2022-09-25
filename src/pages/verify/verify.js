import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../helpers/connections";

const Verify = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Verifying");
  const param = useParams();
  const verify = async () => {
    const data = await apiRequest("auth/verify", { token: param.id }, "post");
    setState(data.message);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  verify();
  return <div>{state}</div>;
};

export default Verify;
