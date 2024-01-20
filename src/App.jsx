import { Description } from "./components/Description/Description";
import { useState, useEffect } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedObjectFeedback = window.localStorage.getItem("feedbacks-curent")

    const parsedFeedback = JSON.parse(savedObjectFeedback);
       if (parsedFeedback && typeof parsedFeedback === "object") {
        return parsedFeedback;
      }

    return {
      good: 0,
      neutral: 0,
      bad: 0
      }

  })

  useEffect(() => {
    window.localStorage.setItem("feedbacks-curent", JSON.stringify(feedback))
  }, [feedback])
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const hasFeedback = totalFeedback !== 0;

  const handleFeedback = (type) => {
    if (type === 'reset') {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      });
    } else {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [type]: prevFeedback[type] + 1
      }));
    }
  };

  return (
    <div>
      <Description />
      <Options handleFeedback={handleFeedback} hasFeedback={hasFeedback}/>
      <Feedback feedback={ feedback } />
    </div>
  )
}

