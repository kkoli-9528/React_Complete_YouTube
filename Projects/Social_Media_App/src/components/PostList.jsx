import React, { useEffect, useState } from 'react';
import Post from "./Post";
import { useContext } from 'react';
import { PostList as Pos } from "../store/post-list-store";
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
  const { postList, addInitialPosts } = useContext(Pos);
  const [fetching, setFetching] = useState(false);

  // Remove the console logs to understand the flow of the async function
  useEffect(() => {
    setFetching(true);
    // console.log("fetch started");
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
        setFetching(false);
        // console.log("fetch returned");
      });
    // console.log("fetch ended");
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;