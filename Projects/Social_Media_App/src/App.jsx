import React from "react"; // Added import React
import Header from "./components/Header"
import Footer from "./components/Footer"
import SideBar from "./components/SiderBar"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css';
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className={styles.appContainer}>
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className={styles.content}>
            <Header />
            {selectedTab === "Home" ?
              (<PostList />) :
              (<CreatePost />)
            }
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App
