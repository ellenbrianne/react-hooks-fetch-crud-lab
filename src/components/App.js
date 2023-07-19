import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(questions => setQuestions(questions))
  }, []);

  function handleAddQuestion (newQuestion) {
    setQuestions([ ...questions, newQuestion ]);
  };

  function handleDeleteQuestion(id) {
    const updatedQuestions = questions.filter(question => question.id !== id);
    setQuestions(updatedQuestions);
  };

  function handleAnswerChange (answer) {
    const updatedQuestions = questions.map(question => {
      if (question.id === answer.id) {
        return answer
      } else {
        return question;
      };
    });
    setQuestions(updatedQuestions);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm onAddQuestion={handleAddQuestion} /> : 
        <QuestionList 
          questions={questions} 
          handleDeleteQuestion={handleDeleteQuestion}
          onAnswerChange={handleAnswerChange}
        />}
    </main>
  );
}

export default App;
