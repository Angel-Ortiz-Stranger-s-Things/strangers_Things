import { useState, useEffect } from "react";
import { fetchMyData } from "../API/strangerAPI";
import "./profile.css";

export default function Profile({ loggedIn, user }) {
  const [posts, setPosts] = useState([]);

  function renderMyPosts() {
    return posts.map((post) => {
      return (
        <div key={post._id} className="profilePosts">
          <h2 className="profileTitle">{post.title}</h2>
          <h4 className="profileDescription">{post.description}</h4>
          <h4 className="profilePrice">{post.price}</h4>
          <h4 className="profileLocation">{post.location}</h4>
          <h4 className="profileDeliver">{post.willDeliver}</h4>
          <link></link>
        </div>
      );
    });
  }

  useEffect(() => {
    async function myPostsHandler() {
      const result = await fetchMyData();
      setPosts(result.data.posts);
    }
    myPostsHandler();
  }, []);

  return (
    <>
      <h1 className="profileHeader">Hello, {user}!</h1>
      <h3 className="profileComment">View all your past and current posts.</h3>
      <div className="profile">{posts.length > 0 && renderMyPosts()}</div>
    </>
  );
}
