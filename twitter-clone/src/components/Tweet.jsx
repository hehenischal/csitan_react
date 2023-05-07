import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TweetBody from "./TweetBody";

const Tweet = ({name,username,key,avatar,content,image}) => {
  useEffect(()=> {
    console.log("mounted");
    return()=> {
      console.log("unmounted");
    }
  },[])
    return(
        <div className="tweet">
        <img
          className="profile-pic"
          src={avatar}
          alt="Profile Picture"
        />
          <div className="tweet-content">
          <Header name={name} username={username} />
          <TweetBody content={content} key={key} image={image}/>
          <Footer  />
          </div>
         
        </div>
    );
};
export default Tweet;