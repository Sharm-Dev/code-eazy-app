
import { useNavigate, Link } from "react-router-dom";
 

export default function ArrayMenu() {
  let navigate = useNavigate();
 

//Made my navigate file path, the same path as what is in the app.js routes to navigate to that component and show the path taken to get there in the url 
  function arrayButtonOne() {
    navigate("/main-menu/array-menu/arrayQ1");
    
  }
  function arrayButtonTwo() {
    navigate("/main-menu/array-menu/arrayQ2");
  }
  function arrayButtonThree() {
    navigate("/main-menu/array-menu/arrayQ3");
  }

  return (
    <div>
      <p>Question About Arrays</p>
      <button
        type="button"
        className="ArrayBtns"
        onClick={() => { 
          arrayButtonOne()
        }}
      >Button one</button>
      <button
        type="button"
        className="ArrayBtns"
        onClick={() => {
          arrayButtonTwo()
        }}
      >Button Two</button>
      <button
        type="button"
        className="ArrayBtns"
        onClick={()=>{arrayButtonThree()}}
      >Button Three</button>
      <button>
        <Link to="/main-menu">Back</Link>
      </button>
    </div>
  );
}
