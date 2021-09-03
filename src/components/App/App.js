import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import { stackExchangeApi } from "../../utils/StackExchangeApi";
import { path } from "../../utils/constants";

import SearchForm from "../SearchForm/SearchForm";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import ResultWindow from "../ResultWindow/ResultWindow";
import { useState } from "react";

function App() {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [previewInfo, setPreviewInfo] = useState([]);

  const searchQuestion = (search) =>
    stackExchangeApi
      .getQuestions(search)
      .then((res) => {
        setQuestions(res.items);
        history.push(path.searchResult);
      })
      .catch((err) => console.log(err));

  const getUserQuestions = (userId) =>
    stackExchangeApi
      .getUserQuestions(userId)
      .then((res) => {
        setPreviewInfo(res)
        console.log(res);
      })
      .catch((err) => console.log(err));

  const getAnswers = ({ question, questionId }) =>
    stackExchangeApi
      .getAnswers(questionId)
      .then((res) => {
        setAnswers(res);
        setQuestion(question);
        history.push(path.answers);
        console.log(res);
      })
      .catch((err) => console.log(err));

  const getFaq = (tag) =>
    stackExchangeApi
      .getFaq(tag)
      .then((res) => {
        setPreviewInfo(res)
        console.log(res);
      })
      .catch((err) => console.log(err));

  return (
    <Switch>
      <Route path={path.main} exact>
        <SearchForm className="app__search-form" onSubmit={searchQuestion} />
      </Route>
      <Route path={path.searchResult}>
        <ResultWindow
          className="app__result-window"
          questions={questions}
          getUserQuestions={getUserQuestions}
          getAnswers={getAnswers}
          getFaq={getFaq}
          previewInfo={previewInfo.items}
        />
      </Route>
      <Route path={path.answers}>
        <QuestionInfo className="app__question-info" question={question} answers={answers} />
      </Route>
    </Switch>
  );
}

export default App;
