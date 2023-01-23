import {Link} from "react-router-dom";
import React from "react";

export const Home = () => {
  return (
    <div className={"min-h-screen min-w-screen flex items-center justify-center"}>
      <Link className={"text-4xl underline hover:text-blue-600 active:text-sky-700"} to="/academy">Academy</Link>
    </div>
  )
}