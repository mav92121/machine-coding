import { Link } from "react-router-dom";
const App = () => {
  return (
    <button>
      <Link to="/tic-tac-toe" style={{ textDecoration: "none" }}>
        Tic Tac Toe
      </Link>
    </button>
  );
};

export default App;
