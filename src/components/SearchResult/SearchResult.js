import "./SearchResult.css";
import React from "react";

function SearchResult({
  className,
  questions,
  getUserQuestions,
  getAnswers,
  getFaq
}) {
  return (
    <table className={`search-result ${className}`.trim()}>
      <thead>
        <tr>
          <td>Автор</td>
          <td>Тема и количество ответов</td>
          <td>Тэги</td>
        </tr>
      </thead>
      <tbody>
        {questions.map((question) => (
          <tr key={question.question_id}>
            <td onClick={() => getUserQuestions(question.owner.user_id)}>
              {question.owner.display_name}
            </td>
            <td
              onClick={() => getAnswers(question.question_id)}
            >{`(${question.answer_count}): ${question.title}`}</td>
            <td>
              {question.tags.map((tag) => (
                <span key={tag} onClick={() => getFaq(tag)}>
                  {tag}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResult;
