import "./App.css";
//IMPORTING COMPONENTS
import Linksflex from "./components/Linksflex";
import Storyflex from "./components/Storyflex";
import Suggestedforu from "./components/Suggestedforu";
import Userpfp from "./assets/User.jpeg";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" type="image/x-icon" href="assets/instagram.png" />
      <title>Instagram</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="styles.css" />
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <Linksflex />
      </div>
      {/* Middle Section */}
      <div className="middle-section">
        <div className="top-nav">
          <Storyflex />
        </div>
        <Posts />
      </div>
      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="my-profile">
          <img
            src={Userpfp}
            alt="Sahan's Profile picture"
            className="my-profile-pfp"
          />
          <div className="myprofile-name-container">
            <div className="myprofile-username">sahaan000</div>
            <div className="myprofile-name">ಸಹನ್</div>
          </div>
          <div className="mybtn">Switch</div>
        </div>
        <Suggestedforu />
        <div className="right-links">
          <p>About ·</p>
          <p>Help ·</p>
          <p>Press ·</p>
          <p>API ·</p>
          <p>Jobs ·</p>
          <p>Privacy ·</p>
          <p>Terms·</p>
          <p>&nbsp;Locations&nbsp;·</p>
          <p>&nbsp;Language&nbsp;·</p>
          <p>&nbsp;Meta Verified</p>
        </div>
        <div className="right-links copyright">
          <p>© 2023 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>
  );
}

export default App;
