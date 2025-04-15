import React from 'react';
import Post from "./Post";
import { useContext } from 'react';
import { PostList as Pos } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(Pos);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;