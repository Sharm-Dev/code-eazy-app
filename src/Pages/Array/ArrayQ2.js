import { Link } from "react-router-dom";

export default function ArrayQ2() {
  return (
    <div>
      <h2>Button two answers</h2>
      <p>Page to explain about the choice from button two</p>
      <button>
        <Link to="/main-menu">Back</Link>
      </button>
    </div>
  );
}
