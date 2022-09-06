import { useNavigate, Link, } from "react-router-dom";


export default function MainMenu() {
  let navigate = useNavigate();
  function ArrayMenuBtn() {
    navigate("/array-menu");
  }
  return (
    <div>
      <p>What data type are you working with?</p>
      <div>
        <button type="button" className="ArrayBtns" onClick={ArrayMenuBtn}>
          Array
        </button>
        <button type="button">Strings</button>
        <button type="button">Objects</button>
      </div>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
