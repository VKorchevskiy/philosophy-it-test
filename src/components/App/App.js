import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import { stackExchangeApi } from "../../utils/StackExchangeApi";
import { path } from "../../utils/constants";

import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import { useEffect, useState } from "react";

function App() {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [userQwestions, setUserQwestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [faq, setFaq] = useState([]);
  const [questionInfo, setQuestionInfo] = useState([]);

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
        setUserQwestions(res);
        setFaq([]);
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
        setFaq(res);
        setUserQwestions([]);
        console.log(res);
      })
      .catch((err) => console.log(err));

  return (
    <Switch>
      <Route path={path.main} exact>
        <SearchForm className="app__search-form" onSubmit={searchQuestion} />
      </Route>
      <Route path={path.searchResult}>
        <SearchResult
          className="app__search-result"
          questions={questions}
          getUserQuestions={getUserQuestions}
          getAnswers={getAnswers}
          getFaq={getFaq}
        />
      </Route>
      <Route path={path.answers}>
        <QuestionInfo className="app__question-info" question={question} answers={answers} />
      </Route>
    </Switch>
  );
}

export default App;
