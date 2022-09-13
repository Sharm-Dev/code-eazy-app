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
            //not sure if I need to put the word Array in here
            props.setMainMenuActivityArray("Array");
          }}
        >
          Array
        </button>
        <button
          type="button"
          onClick={() => {
            props.setMainMenuActivityString();
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
