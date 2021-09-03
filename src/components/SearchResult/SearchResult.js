import "./SearchResult.css";
import React from "react";

function SearchResult({
  className,
  questions,
  getUserQuestions,
  getAnswers,
  getFaq,
}) {
  return (
    <table className={`search-result ${className || ''}`.trim()}>
      <thead className="search-result__title">
        <tr className="search-result__rows search-result__rows_title">
          <td className="search-result__first-column search-result__first-column_title">
            Автор
          </td>
          <td className="search-result__second-column search-result__second-column_title">
            Тема и количество ответов
          </td>
          <td className="search-result__therd-column search-result__therd-column_title">
            Тэги
          </td>
        </tr>
      </thead>
      <tbody className="search-result__content">
        {questions.map((question) => (
          <tr
            key={question.question_id}
            className="search-result__rows search-result__rows_content"
          >

            <td
              className="search-result__first-column search-result__first-column_content"
              onClick={() => getUserQuestions(question.owner.user_id)}
            >
              {question.owner.display_name}
            </td>

            <td
              className="search-result__second-column search-result__second-column_content"
              onClick={() => getAnswers({question: question.title, questionId: question.question_id})}
            >{`(${question.answer_count}): ${question.title}`}</td>

            <td className="search-result__therd-column search-result__therd-column_content">
              {question.tags.map((tag) => (
                <span className='search-result__tag' key={tag} onClick={() => getFaq(tag)}>
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
