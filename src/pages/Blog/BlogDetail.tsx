import React from "react";
import {useParams} from "react-router-dom";

import {Navbar} from "../../components/Navbar";
import {Loader} from "../../components/Loader";
import {Container} from "../../components/Container";

export const BlogDetail = () => {
  const {postSlug} = useParams()
  return (
    <>{
      postSlug?.length ? (
        <div>
          <Navbar items={[{title: "Blog", link: "/blog"}]} currentPath={postSlug}/>
          <Container>
            fd
          </Container>
        </div>
      ) : <Loader/>
    }</>
  )
}