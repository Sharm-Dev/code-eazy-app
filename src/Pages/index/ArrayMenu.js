
import { useNavigate, Link } from "react-router-dom";
 

export default function ArrayMenu() {
  let navigate = useNavigate();
 


  function arrayButtonOne() {
    navigate("/arrayQ1");
    
  }
  function arrayButtonTwo() {
    navigate("/arrayQ2")
  }
  function arrayButtonThree() {
    navigate("/arrayQ3")
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
