import { useState } from "react";

export default function StringMenu() {
    //Created the useState
    const [activeDiv, setActiveDiv] = useState("")
    return (
      // created a on the strings page, a div the contained a paragraph and three buttons
      // Then on the div created a class name that was linked to useState empty string, and said if "display" or "hide", then used the App.css to choose what happen in the display and hide class names
      // Then on the buttons called a onClick function that upated the useState string to the declared strings
      // Then on the next div's created class names that updated the useState to a string that match one from the button, and said if this string matches the useState from the buttons then display content in the div if not then hide it
      <div>
        <div className={activeDiv === "" ? "display" : "hide"}>
          <p>Im on the strings page</p>
          <button onClick={() => setActiveDiv("DivOne")}>Btn1</button>
          <button onClick={() => setActiveDiv("DivTwo")}>Btn2</button>
          <button onClick={() => setActiveDiv("DivThree")}>Btn3</button>
        </div>
        <div className={activeDiv === "DivOne" ? "display" : "hide"}>
          <p>button1 was clicked</p>
          <button>Btn 1.1</button>
          <button>Btn 1.2</button>
          <button>Btn 1.3</button>
          <button onClick={() => setActiveDiv("")}>Back</button>
        </div>
        <div className={activeDiv === "DivTwo" ? "display" : "hide"}>
          <p>button2 was clicked</p>
          <button>Btn 2.1</button>
          <button>Btn 2.2</button>
          <button>Btn 2.3</button>
          <button onClick={() => setActiveDiv("")}>Back</button>
        </div>
        <div className={activeDiv === "DivThree" ? "display" : "hide"}>
          <p>button3 was clicked</p>
          <button>Btn 3.1</button>
          <button>Btn 3.2</button>
          <button>Btn 3.3</button>
          <button onClick={() => setActiveDiv("")}>Back</button>
        </div>
      </div>
    );
}