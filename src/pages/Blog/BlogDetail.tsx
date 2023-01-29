import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Navbar} from "../../components/Navbar";
import {Loader} from "../../components/Loader";
import {Container} from "../../components/Container";
import {FullPostObj} from "../../types";
import {getData} from "../../apiCalls/axios";
import {dateFormat} from "../../utils";

export const BlogDetail = () => {
  const {postSlug} = useParams()
  const [post, setPost] = useState({} as FullPostObj)

  useEffect(() => {
    getData(`/blog/posts/${postSlug}/`).then((post) => setPost(post))
  }, [postSlug])

  return (
    <>{
      post.title ? (
        <div>
          <Navbar items={[{title: "Blog", link: "/blog"}]} currentPath={post.title}/>
          <Container>
            {
              post.image ? (
                <div>
                  <img src={post.image} alt={post.title}/>
                </div>
              ) : <></>
            }
            <div dangerouslySetInnerHTML={{__html: post.description}}></div>
            <div className={"flex justify-between mt-2"}>
              <span>{dateFormat(post.date).time}</span>
              <span>{dateFormat(post.date).date}</span>
            </div>
          </Container>
        </div>
      ) : <Loader/>
    }</>
  )
}