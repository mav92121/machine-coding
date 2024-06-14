import Board from "./components/Board";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <button style={{ display: "block", marginBottom: "20px" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </button>
      <Board />
    </>
  );
};

export default Main;
