import React from "react";
import {Link} from "react-router-dom";

import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";
import {Loader} from "../../components/Loader";

export const BlogList = () => {
  return (
    <>{
      2 > 3 ? (
        <div>
          <Navbar items={[]} currentPath={"Blog"}/>
          <Container>
            <ul>
              <li>
                <Link to={"/blog/ss"}>Slug</Link>
              </li>
            </ul>
          </Container>
        </div>
      ) : <Loader/>
    }</>
  )
}