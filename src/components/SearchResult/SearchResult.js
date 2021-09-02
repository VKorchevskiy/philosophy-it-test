import "./SearchResult.css";
import React from "react";

function SearchResult({ className, questions }) {
  return (
    <table className={`search-result ${className}`.trim()}>
      <tr>
        <td>Автор</td>
        <td>Тема и количество ответов</td>
        <td>Тэги</td>
      </tr>
      {questions.map((question) => (
        <tr key={question.question_id}>
          <td>{question.owner.display_name}</td>
          <td>{`${question.title} (${question.answer_count})`}</td>
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
