import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  addInitialPosts: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  /* 
  - use useCallback() to prevent re-render of the child component due to parent component changes.
  - note: use on funtions, when prop is passed from a parent compoent to a child component, child component will re-render unnecessarily when the parent component is changed/re-render.
  */
  const addInitialPosts = useCallback((posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  }, [dispatchPostList]);

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
