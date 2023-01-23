import {Link} from "react-router-dom";
import React from "react";
import {NavbarProps} from "../types";

export const Navbar = ({items, currentPath}: NavbarProps) => {
  return (
    <div className={"container container-sm mx-auto max-w-4xl my-12 px-4 lg:px-0"}>
      <ul className={"flex items-center flex-wrap text-xl"}>
        <li key={"Home"} className={"mr-2"}>
          <Link className={"text-sky-400 underline"} to={"/"}>Home</Link> {" > "}
        </li>
        {items.map((item) => {
          return (
            <li className={"mr-2"} key={item.link}>
              <Link className={"text-sky-400 underline"} to={item.link}>{item.title}</Link> {" > "}
            </li>
          )
        })}
        <li key={currentPath}>{currentPath}</li>
      </ul>
    </div>
  )
}