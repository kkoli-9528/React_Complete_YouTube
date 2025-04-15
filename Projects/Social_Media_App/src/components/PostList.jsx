import React from 'react';
import Post from "./Post";
import { useContext } from 'react';
import { PostList as Pos } from "../store/post-list-store";
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
  const { postList, addInitialPosts } = useContext(Pos);

  const handleGetPostClick = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => addInitialPosts(data.posts));
  }

  return (
    <>
      {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;