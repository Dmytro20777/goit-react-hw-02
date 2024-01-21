import css from "./Options.module.css";

export const Options = ({ handleFeedback, hasFeedback }) => {
  return (
    <div className={css.container}>
      <button className={css.buttonGood } onClick={() => handleFeedback("good")}>Good</button>
      <button className={css.buttonNeutral} onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button className={css.buttonBad} onClick={() => handleFeedback("bad")}>Bad</button>
      {hasFeedback && (
        <button className={css.buttonReset}
          onClick={() => handleFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};
