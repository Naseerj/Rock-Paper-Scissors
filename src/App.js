import logo from "./logo.svg";
import "./App.css";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import { useState } from "react";
import logos from "./images/logo.svg";
import rules from './images/image-rules.svg'

function App() {
  const [img1, setImg1] = useState(scissors);
  const [img2, setImg2] = useState(rock);
  const [hasWon, setHasWon] = useState("YOU LOSE");
  const [score, setScore] = useState(0);

  let rps = ["rock", "paper", "scissors"];

  function handleChange() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    console.log(rps[randomNumber]);

    let result = rps[randomNumber];
    if (rps[randomNumber] == "rock") {
      setImg1(rock);
    } else if (rps[randomNumber] == "paper") {
      setImg1(paper);
    } else {
      setImg1(scissors);
    }

    function handlechange1() {
      let randomNumber = Math.floor(Math.random() * 3);
      console.log(randomNumber);
      console.log(rps[randomNumber]);

      let result1 = rps[randomNumber];

      if (rps[randomNumber] == "rock") {
        setImg2(rock);
      } else if (rps[randomNumber] == "paper") {
        setImg2(paper);
      } else {
        setImg2(scissors);
      }

      if (result == result1) {
        setHasWon("IT IS A TIE");
      } else if (result == "rock" && result1 == "scissors") {
        setHasWon("YOU WON");
        setScore(score + 1);
      } else if (result == "rock" && result1 == "paper") {
        setHasWon("YOU LOSE");
      } else if (result == "paper" && result1 == "scissors") {
        setHasWon("YOU LOSE");
      } else if (result == "paper" && result1 == "rock") {
        setHasWon("YOU WON");
        setScore(score + 1);
      } else if (result == "scissors" && result1 == "rock") {
        setHasWon("YOU LOSE");
      } else if (result == "scissors" && result1 == "paper") {
        setHasWon("YOU WIN");
        setScore(score + 1);
      }
      // if (hasWon == "You win") {
      //   setScore(score + 1);
      // }
    }

    // if(res)
    // console.log(hasWon);

    handlechange1();
  }

  let randomNumber = Math.random();
  return (
    <div className="App">
      <div className="div1">
        <div>
          <img className="logos" src={logos} alt="" />
        </div>
        <div className="scorediv">
          <h2 className="score">Score</h2>
          <h1 className="headerscore">{score}</h1>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="img1text">You picked</h1>
          <div className="img1div">
          <img className="img1" src={img1} alt="" />
          </div>
        </div>
        <div className="showdiv">
          <h1 className="readertext">{hasWon}</h1>
          <button className="btn"
            onClick={() => {
              handleChange();
            }}
          >
            PLAY AGAIN
          </button>
        </div>
        <div>
          <h1 className="img2text">The house picked</h1>
         <div className="img2div">
         <img className="img2" src={img2} alt="" />
         </div>
        </div>
      </div>
      <div className="anchordiv">
        <a className="a" href={rules}>RULES</a>
      </div>
    </div>
  );
}

export default App;
