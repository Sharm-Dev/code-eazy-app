import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrayQ1 } from "./ArrayQ1";
import { ArrayQ2 } from "./ArrayQ2";


export default function ArrayMenu() {
  const navigate = useNavigate();

  let { arrayId } = useParams();
  console.log({ arrayId });

  function ArrayNumbers(questionNum) {
    navigate(`/array-numbers/arrayQ${questionNum}`);
  }

  function printButtons(ArrayQ1) {
    return ArrayQ1.map((eachQuestion) => (
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
      {arrayId === "array-numbers/arrayQ1"
        ? printButtons(ArrayQ1)
        : printButtons(ArrayQ2)}
      <button>
        <Link to="/main-menu">Back</Link>
      </button>
    </div>
  );
}
