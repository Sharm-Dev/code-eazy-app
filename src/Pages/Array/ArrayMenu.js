
import { useNavigate, useParams, Link, useHistory } from "react-router-dom";


import { ArrayQ1 } from "./ArrayQ1";
import { ArrayMenuBTNs } from "./ArrayMenuBTNs";





export default function ArrayMenu() {
  const navigate = useNavigate();

  let { arrayId } = useParams();
  console.log({ arrayId });

  function ArrayNumbers(questionNum) {
    navigate(`/array-numbers/arrayQ${questionNum}`);
  }

  function printButtons(ArrayMenuBTNs) {
    return ArrayMenuBTNs.map((eachQuestion) => (
      <button
        key={eachQuestion.id}
        type="button"
        onClick={() => ArrayNumbers(eachQuestion.id)}
      >
        {eachQuestion.text}
      </button>
    ));
  }

  

  return (
    <div>
      <p>How would you like to manipulate your array?</p>
      <button type="button">Numbers</button>
     <button type="button">Strin</button>
      {/* {arrayId === "array-numbers/ArrayMenuBTNs"
        ? printButtons(ArrayQ1)
        : printButtons(ArrayMenuBTNs)} */}
      <button>
        <Link to="/main-menu">Back</Link>
      </button>
    </div>
  );
}
