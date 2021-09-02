import "./SearchResult.css";
import React, { useEffect } from "react";

function SearchResult({ className, questions, getAnswers }) {

  return (
    <table className={`search-result ${className}`.trim()}>
      <tr>
        <td>Автор</td>
        <td>Тема и количество ответов</td>
        <td>Тэги</td>
      </tr>
      {questions.map((question) => (
        <tr key={question.question_id}>
          <td onClick={() => getAnswers(question.owner.user_id)}>{question.owner.display_name}</td>
          <td>{`(${question.answer_count}): ${question.title}`}</td>
          <td>
            {question.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </td>
        </tr>
      ))}
    </table>
  );
}

export default SearchResult;
