export const StatesGame = () => {
  return (
    <>
      <h1>50 US States Game</h1>
      <h2>Can you name all 50 US states?</h2>
      <div className="guessInput">
        <label htmlFor="guess">Enter your guess here: </label>
        <input id="guess" />
      </div>
      <div className="score">
        <p>Total: 0/50</p>
      </div>
      <div>
        <textarea placeholder="Your correct answers" disabled />
      </div>
      <button>Restart</button>
      <button>Show answers</button>
    </>
  );
};
