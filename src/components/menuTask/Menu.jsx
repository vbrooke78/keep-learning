import { useState } from 'react';

export const Menu = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <>
      <h1>Drop Down Menu</h1>
      <button
        className="instructionsButton"
        onClick={() => setShowInstructions((bool) => !bool)}
      >
        Show/Hide Instructions
      </button>
      <br />
      <br />
      {showInstructions && (
        <section>
          <hr />
          <h3>Instructions:</h3>
          <p>Your task is to build a drop down menu!</p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>Create a menu bar with at least 5 elements on it,</li>
            <li>
              Have a minimum of 2 of those elements have their own options to
              select,
            </li>
            <li>
              When we hover over an expandable option, we want to display the
              rest of the options,
            </li>
            <li>
              When we move away from the expandable option, it hides the rest of
              its options,
            </li>
            <li>
              Add a hover over effect on each option to show we are interacting
              with that option,
            </li>
          </ul>
          <strong>You must do this using pure CSS</strong>
          <hr />
        </section>
      )}
      <ul className="mainMenu">
        <li className="menu">
          <a href="#">Home</a>
        </li>
        <li className="menu">
          <a href="#">About Me</a>
        </li>
        <li className="menu">
          <a href="#">Skills</a>
          <div className="dropMenu">
            <ul>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">TDD</a>
              </li>
              <li>
                <a href="#">Pair programming</a>
              </li>
              <li>
                <a href="#">Git version control</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu">
          <a href="#">Training</a>
        </li>
        <li className="menu">
          <a href="#">Contact</a>
          <div className="dropMenu">
            <ul>
              <li>
                <a href="https://vickybrooke-portfolio.netlify.app/">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vicky-brooke/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/vbrooke78">GitHub</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};
