import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from "../InputOption/InputOption";
import "./Post.css";

type PostProps = {
  name: string;
  description: string;
  message: string;
  image: string;
};

function Post({ name, description, message, image }: PostProps) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={image} />
        <div className="post__info">
          <h2>Denilson Lemus</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          tempus dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Mauris non nisl id velit bibendum accumsan. Etiam non
          tincidunt ipsum, sed ullamcorper elit. Donec vestibulum eros elit, ac
          porttitor velit ultricies quis.
        </p>
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
