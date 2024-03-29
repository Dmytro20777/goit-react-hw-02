import css from "./Feedback.module.css";
import { Notification } from "../Notification/Notification";
import { VscFeedback } from "react-icons/vsc";

export const Feedback = ({ feedback: { good, neutral, bad }, positive, totalFeedback }) => {

  return (
    <div className={css.container}>
      <h2 className={css.title}>Feedback <VscFeedback className={css.icon} /></h2>
        <div className={css.details}>
          <p className={css.feedbackType}>Good:{good}</p>
          <p className={css.feedbackType}>Neutral:{neutral}</p>
          <p className={css.feedbackType}>Bad:{bad}</p>
          <p className={css.total}>Total:{totalFeedback}</p>
          <p className={css.positive}>
            Positive: {positive}%
          </p>
        </div>
    </div>
  );
};
