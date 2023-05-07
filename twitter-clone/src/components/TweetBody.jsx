import { useNavigate } from "react-router-dom";

const TweetBody = ({content,key,image}) => {
  const navigate = useNavigate();
  const navigatetotweet= () => {
    navigate(`/tweet/${key}`);
  }
    return (
        <>
        <a href={`/tweet/${key}`}>
        <p className="tweet-text">{content}</p>
          <img
            className="tweet-image"
            src={image}
            alt="Tweet Image"
            height={300}
            width = {300}
          />
          </a>
        </>

    );
};
export default TweetBody;


