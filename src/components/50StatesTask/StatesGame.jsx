import { useEffect, useState } from 'react';
import { states } from './utils/states';

export const StatesGame = () => {
  const [guess, setGuess] = useState('');

  const [answers, setAnswers] = useState([]);

  const [score, setScore] = useState(0);

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
  }, [guess]);

  return (
    <>
      <h1>50 US States Game</h1>
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
            console.log(newAnswers.length);
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
