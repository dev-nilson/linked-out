import React from "react";
import { Avatar } from "@mui/material";
import { randomRgbColor } from "../../utils/helpers";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
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
  const color = randomRgbColor();

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          src={image}
          style={{
            color: "#fff",
            background: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`,
          }}
        >
          {name.at(0)}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpOffAltIcon}
          ActiveIcon={ThumbUpIcon}
          title="Like"
          color="333"
        />
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="333" />
        <InputOption Icon={ShareIcon} title="Share" color="333" />
      </div>
    </div>
  );
}

export default React.memo(Post);
