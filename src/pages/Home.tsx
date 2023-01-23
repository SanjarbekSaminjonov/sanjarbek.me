import {Link} from "react-router-dom";
import React from "react";

export const Home = () => {
  return (
    <div className={"min-h-screen min-w-screen flex items-center justify-center"}>
      <div className={"text-center"}>
        <p className={"text-gray-500 mb-5"}>This web site is still in development mode</p>
        <a className={"text-4xl underline hover:text-blue-600 active:text-sky-700"}
           href={"https://github.saminjonov.uz"}>Go old version</a>
        <br/>
        <br/>
        <Link className={"text-2xl text-white hover:text-blue-600 hover:underline"} to="/academy">Academy</Link>
      </div>
    </div>
  )
}