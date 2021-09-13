import "./QuestionInfo.css";
import React from "react";
import ReactHtmlParser from 'react-html-parser';


function QuestionInfo({ className, question, answers }) {
  
  return (
    <article className={`question-info ${className || ""}`.trim()}>
      <h2 className="question-title">{question}</h2>

      <ol className="question-info__answers">
        {answers.items.map((answer) => {
          return (

          <li className="answere" key={answer.answer_id}>
            {ReactHtmlParser(answer.body)}
          </li>
        )})}
      </ol>
    </article>
  );
}

export default QuestionInfo;
