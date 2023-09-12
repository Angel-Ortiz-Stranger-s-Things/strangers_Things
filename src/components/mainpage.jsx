import { Routes, Route } from "react-router-dom";
import Homepage from "./Home";
import AllPosts from "./Postings";
import LogIn from "./login";
import Register from "./register";
import CreatePost from "./createposting";
import Messages from "./sentmessages";
import Profile from "./profile";
import SendMessage from "./message";
import Searchbar from "./searchBar";

export default function Main({ setLoggedIn, setUser, loggedIn, user }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/posts" element={<AllPosts />} />

        <Route path="/search" element={<Searchbar />} />

        <Route
          path="/messages"
          element={<Messages loggedIn={loggedIn} user={user} />}
        />

        <Route
          path="/sendmessage"
          element={<SendMessage loggedIn={loggedIn} user={user} />}
        />

        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} user={user} />}
        />

        <Route
          path="/login"
          element={<LogIn setLoggedIn={setLoggedIn} setUser={setUser} />}
        />

        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} setUser={setUser} />}
        />

        <Route
          path="/newpost"
          element={<CreatePost loggedIn={loggedIn} user={user} />}
        />
      </Routes>
    </div>
  );
}
