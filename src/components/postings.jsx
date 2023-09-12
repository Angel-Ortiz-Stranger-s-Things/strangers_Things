import { useState, useEffect } from "react";
import { fetchAllPosts, deletePost } from "../API/strangerAPI";
import { useNavigate } from "react-router-dom";
import "./postings.css";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  function renderAllPosts() {
    return posts.map((post) => {
      return (
        <div key={post._id} className="eachPost">
          <h2 className="postTitle">{post.title}</h2>
          <h4 className="postDescription">{post.description}</h4>
          <h4 className="postPrice">{post.price}</h4>
          <h4 className="postLocation">{post.location}</h4>
          <h4 className="postDeliver">{post.willDeliver}</h4>
          <button
            className="postButton"
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
          <button
            className="postButton"
            onClick={() => navigate("/sendmessage")}
          >
            Send Message
          </button>
        </div>
      );
    });
  }

  useEffect(() => {
    async function allPostsHandler() {
      const result = await fetchAllPosts();
      setPosts(result.data.posts);
    }
    allPostsHandler();
  }, []);

  async function handleDelete(postId) {
    try {
      await deletePost(postId);
      const updatedPosts = await fetchAllPosts();
      setPosts(updatedPosts.data.posts);
    } catch (error) {
      console.error(error);
    }
  }

  return <div className="allPosts">{renderAllPosts()}</div>;
}
