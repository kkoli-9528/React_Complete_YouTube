const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <>
      <center>
        <h1 style={{ display: "flex", justifyContent: "center", margin: "revert" }}>There are no posts</h1>
        <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Post From Server</button>
      </center>
    </>
  );
}

export default WelcomeMessage;