import { useState } from "react";
import { createPost } from "../API/strangerAPI";
import { useNavigate } from "react-router-dom";
import "./createposting.css";

export default function CreatePost({ loggedIn }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await createPost(title, description, price, location, delivery);
    } catch (error) {
      console.error("Could not make post", error);
    }
    navigate("/posts");
  }

  return (
    <>
      {loggedIn ? (
        <div className="create-post">
          <h1 className="create-header">Create new post</h1>
          <form className="create-form" onSubmit={handleSubmit}>
            <label className="label">
              Title:{''}
              <input
                className="input"
                type="text"
                name="title"
                placeholder="Name of the posting"
                required={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="label">
              Description:{''}
              <input
                className="input"
                type="text"
                name="description"
                placeholder="Description"
                required={true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label className="label">
              Price:{''}
              <input
                className="input"
                type="text"
                name="price"
                placeholder="Price"
                required={true}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label className="label">
              Location:{''}
              <input
                className="input"
                type="text"
                name="location"
                placeholder="Posts Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label className="label">
              Delivery
              <input
                className="checkbox"
                type="checkbox"
                name="location"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
              />
            </label>
            <button type="submit" className="post-button">
              Create Post
            </button>
          </form>
        </div>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
}
