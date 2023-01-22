import {Link} from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <div className={"underline"}>
      <ul className={"flex items-center"}>
        <li className={"m-2 text-2xl"}>
          <Link to="/">Home</Link>
        </li>
        <li className={"m-2 text-2xl"}>
          <Link to="/academy">Academy</Link>
        </li>
      </ul>
    </div>
  )
}