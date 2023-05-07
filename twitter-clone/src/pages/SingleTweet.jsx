import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleTweet = ( ) => {
    const[tweet,setTweet] =useState(null)
    const { key } = useParams
    const fetchTweet = async () => {
        const resp = await axios.get(`https://react-workshop-todo.fly.dev/posts/${key}`,
        {
            headers: {
                apiKey:"645735c37213f63d43502a8f",
            },
        }
    );
    console.log(resp.data);
    setTweet(resp.data.post);

    }
    useEffect( () => {
        fetchTweet();
    } ,[])
    return(
        <>
        {tweet ? (
            <tweet 
            prof= {`https://avatars.githubusercontent.com/u/${tweet?.user?.githubId}`}
            tweet = {tweet?.tweet}
            key={tweet?._id}
            name={tweet?.user.fullname}
            username={tweet?.user.name}
            imageUrl={tweet?.image}
            />

        ): null } 
        
        </>

    );
};
export default SingleTweet;