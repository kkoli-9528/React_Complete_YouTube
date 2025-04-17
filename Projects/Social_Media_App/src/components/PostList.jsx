import React, { useEffect, useState } from 'react';
import Post from "./Post";
import { useContext } from 'react';
import { PostList as Pos } from "../store/post-list-store";
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
  const { postList, addInitialPosts } = useContext(Pos);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    /* 
    - return in UseEffect() hook is fired when the component is Unmounted from memory.
    - return can be used as a clean up of any API call or any async action.
    */
    return (() => {
      console.log("Cleaning a UseEffect.");
    })
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