import { Link } from "react-router-dom";
 

export default function MainMenu(props) {

  return (
    <div>
      <p>What data type are you working with?</p>
      <div>
        <button
          type="button"
          className="ArrayBtns"
          onClick={() => {
            //used the window.location.href to delcare what url was active when I clicked the button
            window.location.href = "http://localhost:3000/main-menu/array-menu";
          }}
        >
          Array
        </button>
        <button
          type="button"
          onClick={() => {
            window.location.href = "http://localhost:3000/main-menu/string-menu";
          }}
        >
          Strings
        </button>
        <button
          type="button"
          onClick={() => {
            props.setMainMenuActivityObject();
          }}
        >
          Objects
        </button>
      </div>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
