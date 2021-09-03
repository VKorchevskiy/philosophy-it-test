import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import { stackExchangeApi } from "../../utils/StackExchangeApi";
import { path } from "../../utils/constants";

import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import { useEffect, useState } from "react";

function App() {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [userQwestions, setUserQwestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [faq, setFaq] = useState([]);

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

  const getAnswers = (questionId) =>
    stackExchangeApi
      .getAnswers(questionId)
      .then((res) => {
        history.push(path.answers);
        setAnswers(res);
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
      <Route path={path.answers}>inf</Route>
    </Switch>
  );
}

export default App;
