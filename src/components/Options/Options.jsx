import css from "./Options.module.css";

export const Options = ({ handleFeedback, hasFeedback }) => {
  return (
    <div className={css.container}>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {hasFeedback && (
        <button
          className={css.reset}
          onClick={() => handleFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};
