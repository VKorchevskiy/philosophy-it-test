import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import { stackExchangeApi } from "../../utils/StackExchangeApi";

import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";
import { useEffect, useState } from "react";

function App() {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const searchQuestion = (search) =>
    stackExchangeApi
      .getQuestions(search)
      .then((res) => {
        setQuestions(res.items);
        history.push("/result");
      })
      .catch((err) => console.log(err));

  const getAnswers = (userId) =>
    stackExchangeApi
      .getAnswers(userId)
      .then((res) => setAnswers(res))
      .catch((err) => console.log(err));

  return (
    <Switch>
      <Route path="/" exact>
        <SearchForm className="app__search-form" onSubmit={searchQuestion} />
      </Route>
      <Route path="/result">
        <SearchResult questions={questions} getAnswers={getAnswers} />
      </Route>
      <Route path="/info">inf</Route>
    </Switch>
  );
}

export default App;
