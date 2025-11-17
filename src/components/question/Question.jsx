import React from "react";

import Answers from "../answers/Answers";
import QuestionTimer from "../quiz/question-timer";
const Question = ({
  onSkipAnswer,
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSelected,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelected}
      />
    </div>
  );
};

export default Question;
