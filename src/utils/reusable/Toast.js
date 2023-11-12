import React, { useEffect } from "react";
import "../../scss/toast.scss";
import { useNavigate } from "react-router-dom";

const Toast = ({ message, closeFn, delay }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeFn();
      navigate("/");
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div className="toast">
      <p>{message}</p>
      <button onClick={closeFn}>&times;</button>
    </div>
  );
};

export default Toast;
