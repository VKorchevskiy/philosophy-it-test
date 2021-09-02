import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import { stackExchangeApi } from "../../utils/StackExchangeApi";

import SearchForm from "../SearchForm/SearchForm";

function App() {
  const searchQuestion = (search) =>
    stackExchangeApi.getQuestions(search).then((res) => console.log(res));

  return (
    <Switch>
      <Route path="/" exact>
        <SearchForm className="app__search-form" onSubmit={searchQuestion} />
      </Route>
      <Route path="/result">res</Route>
      <Route path="/info">inf</Route>
    </Switch>
  );
}

export default App;
