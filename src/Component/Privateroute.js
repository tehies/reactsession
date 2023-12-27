import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRote = (props) => {

  const { Start } = props

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Start />
    </div>
  );
};

export default PrivateRote;
