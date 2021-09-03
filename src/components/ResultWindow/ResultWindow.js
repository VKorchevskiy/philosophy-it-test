import SearchResult from "../SearchResult/SearchResult";

import "./ResultWindow.css";
import React from "react";

function ResultWindow({
  className,
  questions,
  getUserQuestions,
  getAnswers,
  getFaq,
  previewInfo,
}) {
  console.log(previewInfo);

  return (
    <main className={`result-window ${className || ""}`.trim()}>
      <SearchResult
        className="result-window__search-result"
        questions={questions}
        getUserQuestions={getUserQuestions}
        getAnswers={getAnswers}
        getFaq={getFaq}
      />
      {previewInfo ? (
        <SearchResult
          className={`result-window__preview ${
            previewInfo.length === 0
              ? "result-window__preview_disable"
              : "result-window__preview_enable"
          }`}
          questions={previewInfo}
          getUserQuestions={getUserQuestions}
          getAnswers={getAnswers}
          getFaq={getFaq}
        />
      ) : (
        <></>
      )}
    </main>
  );
}

export default ResultWindow;
