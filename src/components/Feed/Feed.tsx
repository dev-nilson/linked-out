import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { IPost } from "../../types/interfaces";
import { db } from "../../../firebase";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import DescriptionIcon from "@mui/icons-material/Description";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import "./Feed.css";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((post) => ({
          id: post.id,
          image: post.data().image,
          name: post.data().name,
          description: post.data().description,
          message: post.data().message,
        }))
      );
    });

    return unsubscribe;
  }, []);

  const sendPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: "Denilson Lemus",
      description: "Developer",
      message: input,
      image: "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__create">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__options">
          <InputOption Icon={ImageIcon} title="Photo" color="378fe9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="5f9b41" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="c37d16" />
          <InputOption Icon={DescriptionIcon} title="Article" color="e16745" />
        </div>
      </div>
      {posts.map((post: IPost) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Feed;
