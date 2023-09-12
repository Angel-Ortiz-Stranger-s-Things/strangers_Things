import strangeStore from "../assets/Strange_Store.png";
import "./Home.css";

export default function Homepage() {
  return (
    <>
      <div className="Home-Page">
        <h1 className="Big-Header">Buy or Sell, take your pick</h1>
      </div>
      <div className="Home-Pic">
        <img className="Stranger-S" src={strangeStore} alt="storefront logo" />
      </div>
      <div className="Home-Page">
        <h3 className="Header-Comment">
          I've gotta selection of good things on sale stranger.
        </h3>
      </div>
    </>
  );
}
