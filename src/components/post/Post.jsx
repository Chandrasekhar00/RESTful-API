import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const user = Users.find((u) => u.id === post.userId);
  
  const [like,setLike]= useState(post.like);
  const [isLiked,setIsLiked]=useState(false);

  const likeHandler=()=>{
    setLike(isLiked ? like-1 :like+1);
    setIsLiked(!isLiked);
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user?.profilePicture} alt="" className="postProfileImg" />
            <span className="profilename">{user?.username}</span>
            <span className="dateOFProfile">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="firstpost" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" onClick={likeHandler} alt="" className="likes" />
            <img src="/assets/heart.png" onClick={likeHandler}  alt="" className="heart" />
            <span className="likesCount">{like} People like it</span>
          </div>
          <div className="postBottomRight">
            <CommentIcon />
            <span className="commentCount">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
