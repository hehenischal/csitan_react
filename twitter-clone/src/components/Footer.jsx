import { useEffect } from "react";
import { useState } from "react";
import LikeButton from "./LikeButton";
import UnLikeButton from "./UnLikeButton";

const Footer = () => {
    const[isLiked, setisliked] = useState(false);
    const toggle = () => {
        setisliked(isLiked=>!isLiked);        
    }
    useEffect(()=> {
        console.log("Hello world from useEffect");
    },[])
    return (
        
        <div className="tweet-footer">
        <button className="btn-reply">Reply</button>
        <button className="btn-retweet">Retweet</button>
        {isLiked? <UnLikeButton toggle={toggle} isLiked={isLiked}/>:<LikeButton toggle={toggle} isLiked={isLiked}/>}
        <button className="btn-share">Share</button>
        </div>

    );
};
export default Footer;