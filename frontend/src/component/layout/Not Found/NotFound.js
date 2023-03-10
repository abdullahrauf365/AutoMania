import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>404 Page Not Found Please Try Again</Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
