import { useCallback, useState } from "react";
import QUESTIONS from "../../data/questionsUkr";
import quizComplited from "../../assets/quiz-complete.png";
import Question from "../question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });

      let timeoutId = setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  if (isQuizCompleted) {
    return (
      <>
        <div id="summary">
          <img src={quizComplited} alt="Quiz Complited" />
          <h2>Quiz Completed</h2>
        </div>
      </>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        questionText={QUESTIONS[activeQuestionIndex].text}
        onSelected={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        answers={QUESTIONS[activeQuestionIndex].answers}
      />
    </div>
  );
};

export default Quiz;
