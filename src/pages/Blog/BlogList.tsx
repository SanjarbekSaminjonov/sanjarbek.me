import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {getData} from "../../apiCalls/axios";
import {Navbar} from "../../components/Navbar";
import {Container} from "../../components/Container";
import {Loader} from "../../components/Loader";
import {dateFormat} from "../../utils";
import {PostObj} from "../../types";

export const BlogList = () => {
  const [posts, setPosts] = useState([] as PostObj[])

  useEffect(() => {
    getData("/blog/posts/").then((posts) => setPosts(posts))
  }, [])

  return (
    <>{
      posts.length ? (
        <div>
          <Navbar items={[]} currentPath={"Blog"}/>
          <Container>
            <ul>{
              posts.map((post) => (
                <li key={post.slug} className={"flex justify-between"}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  <span>{dateFormat(post.date).date}</span>
                </li>
              ))
            }</ul>
          </Container>
        </div>
      ) : <Loader/>
    }</>
  )
}