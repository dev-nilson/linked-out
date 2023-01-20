import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import InputOption from "../InputOption/InputOption";
import "./Post.css";

type PostProps = {
  id: string;
  name: string;
  description: string;
  message: string;
  image: string;
};

function Post({ id, name, description, message, image }: PostProps) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={image} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="333" />
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="333" />
        <InputOption Icon={ShareIcon} title="Share" color="333" />
      </div>
    </div>
  );
}

export default Post;
