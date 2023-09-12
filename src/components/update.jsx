import { useState } from "react";

export default function UpdatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [Delivery, setDelivery] = useState(false);

  async function editPost({ id }) {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/posts/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: {
              title: "",
              description: "",
              price: "",
              location: "",
              Delivery: false,
            },
          }),
        }
      );
      const result = await response.json();
      console.log("Updating the post", result);
      return result;
    } catch (error) {
      console.error("Error when editing your post", error);
    }
  }

  return (
    <div>
      <h2>Create new post</h2>
      <form onSubmit={editPost}>
        <label>
          Title: {""}
          <input
            type="text"
            name="title"
            placeholder="Name of the posting"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description: {""}
          <input
            type="text"
            name="description"
            placeholder="Description"
            required={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price: {""}
          <input
            type="text"
            name="price"
            placeholder="Price"
            required={true}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Location: {""}
          <input
            type="text"
            name="location"
            placeholder="Posts Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Delivery
          <input
            type="checkbox"
            name="location"
            value={Delivery}
            onChange={(e) => setDelivery(e.target.value)}
          />
        </label>
        <button className="post-button">Create Post</button>
      </form>
    </div>
  );
}
