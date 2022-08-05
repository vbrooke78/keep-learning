import { useEffect, useState } from 'react';
import { states } from './utils/states';

export const StatesGame = () => {
  const [guess, setGuess] = useState('');

  const [answers, setAnswers] = useState([]);

  const [score, setScore] = useState(0);

  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const regex = new RegExp(`^${guess}$`, 'i');
    states.forEach((state) => {
      if (regex.test(state) && !answers.some((state) => regex.test(state))) {
        setScore(score + 1);
        setAnswers((answers) => {
          const newAnswers = [...answers];
          const newState = states.filter((state) => regex.test(state));
          newAnswers.push(newState[0]);
          if (newAnswers.length === 50) {
            newAnswers.push('\n\nWell done you found all 50 states!');
          }
          return newAnswers;
        });
        setGuess('');
      }
    });
  }, [guess, answers, score]);

  return (
    <>
      <h1>50 US States Game</h1>
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
          <p>
            Your task is to build a mini game where a player can guess all 50 US
            states...
          </p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>
              Create an input box where the user can type any case insensitive
              state and it will accept the answer,
            </li>
            <li>
              Create text box that will store all the correct answers the player
              has given,
            </li>
            <li>
              The text box should not accept duplicate values, regardless of
              case sensitivity,
            </li>
            <li>Create a restart button that will reset the game,</li>
            <li>
              A give up button that will show the remaining answers that the
              player did not guess,
            </li>
            <li>
              A counter that will tell the player how many states he has
              correctly guessed
            </li>
          </ul>
          <h4>Challenge:</h4>
          <p>
            Add a timer that when it reaches 0 will disable the input box until
            restart is pressed
          </p>
          <hr />
        </section>
      )}
      <h2>Can you name all 50 US states?</h2>
      <form className="guessInput">
        <label htmlFor="guess">Enter your guess here: </label>
        <input
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </form>
      <div className="score">
        <p>Total: {score}/50</p>
      </div>
      <div>
        <textarea
          placeholder="Your correct answers"
          disabled
          value={answers.join(', ')}
        />
      </div>
      <button
        className="customButton"
        onClick={() => {
          setAnswers([]);
          setScore(0);
          setGuess('');
        }}
      >
        Restart?
      </button>
      <button
        className="customButton"
        onClick={() => {
          const missingAnswers = states.filter((val) => !answers.includes(val));
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers.push(...missingAnswers);
            if (newAnswers.length === 50) {
              newAnswers.push('\n\nBetter luck next time!');
            }
            return newAnswers;
          });
        }}
      >
        Show answers
      </button>
    </>
  );
};
