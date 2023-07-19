import React from "react";

function QuestionItem({ question, handleDeleteQuestion, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick () {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(() => handleDeleteQuestion(id))
    
  };

  function handleAnswerChange (event) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": event.target.value
      })
    })
    .then(resp => resp.json())
    .then(answer => onAnswerChange(answer))
  };

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
