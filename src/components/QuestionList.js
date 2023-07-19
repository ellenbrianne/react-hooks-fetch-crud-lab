import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDeleteQuestion, onAnswerChange }) {

  const questionDisplay = questions.map(question => {
    return <QuestionItem 
              key={question.id} 
              question={question} 
              handleDeleteQuestion={handleDeleteQuestion} 
              onAnswerChange={onAnswerChange} 
           />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionDisplay}</ul>
    </section>
  );
}

export default QuestionList;
