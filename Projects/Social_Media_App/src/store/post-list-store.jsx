import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = ({
    userId,
    postTitle,
    postBody,
    reactions,
    tags,
  }) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userId,
        tag: tags,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      },
    });
  };

  return <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
  }}>
    {children}
  </PostList.Provider>;
};

const DEFAULT_POST_LIST = [{
  id: 1,
  title: "Go To Mumbai",
  body: "Hi Friends, I am going to Mumbai this weekend. Anyone interested to join me?",
  reactions: 2,
  userID: "user-9",
  tag: ['vacation', 'Mumbai', 'Enjoy']
},
{
  id: 2,
  title: "Go To Goa",
  body: "Hi Friends, I am going to Goa this weekend. Anyone interested to join me?",
  reactions: 15,
  userID: "user-12",
  tag: ['vacation', 'Goa', 'Enjoy']
}];

export default PostListProvider;