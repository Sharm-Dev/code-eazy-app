import { useNavigate, Link, } from "react-router-dom";


export default function MainMenu(props) {
  //created a variable that has useNavigate from React dom, so I can set various end points  
  let navigate = useNavigate();
  //created a function and inside used my variable from above to set my end point 
  function ArrayMenuBtn() {
    navigate("/array-menu");
    console.log("Array end point works");
  }

  function StringMenuBtn() {
    navigate("/string-menu");
  }

  function ObjectMenuBtn() {
    navigate("/object-menu");
 
 }

  return (
    <div>
      <p>What data type are you working with?</p>
      <div>
        <button
          type="button"
          className="ArrayBtns"
          onClick={() => {
            //called my function with the navigate end point 
            ArrayMenuBtn();
            //Then used props to access the matching router component/container in app.js with the function and item   
            props.setMainMenuActivityArray();
          }}
        >
          Array
        </button>
        <button
          type="button"
          onClick={() => {
            StringMenuBtn();
            props.setMainMenuActivityString();
          }}
        >
          Strings
        </button>
        <button
          type="button"
          onClick={() => {
            ObjectMenuBtn();
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
