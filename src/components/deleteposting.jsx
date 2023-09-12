import { deletePost } from "../API/strangerAPI";
import { useNavigate } from "react-router-dom";

export default function Delete({ postId }) {
  const navigate = useNavigate();

  async function handleDelete() {
    const confirmation = window.confirm("Delete Post?");
    if (confirmation) {
      try {
        await deletePost(postId);
        navigate("/posts");
        alert("Post Deleted");
      } catch (error) {
        console.error("Error when trying to delete post", error);
      }
    }
  }

  return (
    <button className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
}
