import { useState } from "react";
import axios from "axios";

const CreateTweet = ({ShouldRefresh, setShouldRefresh}) => {
    const[tweetContent,setTweetContent]= useState("");

    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts",{
            content:tweetContent,
            image:imageUrl,
        },
        {
            headers:{
             ApiKey:"645735c37213f63d43502a8f"
            }
            });
        setTweetContent("");
        setImageUrl("");
        setShouldRefresh((v)=>!v);
        }
        catch(e)
        {
            console.log(e);
            alert("error uploading tweet");

        }
        }
    
    const handleSubmit = () => {
        upload();

        
    }
    const[imageUrl,setImageUrl]=useState("");
    return (
        <div className="tweet-create">
        <textarea name=""
         id=""
         placeholder="What's happening"
         required
          value={tweetContent}
          onChange={(e)=> setTweetContent(e.target.value)}
          ></textarea>

          <input type="text"
          placeholder="set image url"
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}
          />
          <div className="tweet-controls">
            <span id="char-count">280</span>
            <button id="tweet-btn" onClick={handleSubmit}>Tweet</button>
          </div>
    </div>

    );

    
};

export default CreateTweet;