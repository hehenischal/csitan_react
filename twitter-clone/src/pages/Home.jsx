import { useEffect, useState } from "react";
import "./App.css"
import axios from "axios";
import Tweet from "../components/Tweet";
import CreateTweet from "../components/CreateTweet";
import Navbar from "../components/Navbar";



const Home = () => {
  const [Tweets,setTweets]=useState([]);
  const [ ShouldRefresh, setShouldRefresh]=useState(false);
  const fetchTweets= async() => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all",{
      headers: {
        apiKey: "645735c37213f63d43502a8f"
      }
    });
    console.log(posts.data);
    setTweets(posts.data);
  } 
   useEffect(()=> {
    fetchTweets();
  },[ShouldRefresh]);
  return (
  <>
    <CreateTweet ShouldRefresh={ShouldRefresh} setShouldRefresh={setShouldRefresh}/>
    {Tweets.map((tweet) => {
      return(
      <Tweet
        name={tweet.user.fullname}
        username={tweet.user.name}
        key = {tweet._id}
        avatar = {`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}
        content={tweet.content}
        image={tweet.image}/>);
    })}
  </>
  );
};

export default Home;