import { Link } from "react-router-dom";

export default function ArrayQ3() {
  return (
    <div>
      <h2>Button one answers</h2>
      <p>Page to explain about the choice from button three</p>
      <button>
        <Link to="/main-menu">Back</Link>
      </button>
    </div>
  );
}
