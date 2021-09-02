import { optionsStackExchangeApi, headers } from "./constants";
import { checkResponse } from "../utils/utils";

class StackExchangeApi {
  constructor(options, headers) {
    this.baseUrl = options.baseUrl;
    this.headers = headers;
  }

  getQuestions = (search) =>
    fetch(
      `${this.baseUrl}/2.3/search?key=${optionsStackExchangeApi.key}&intitle=${search}&site=${optionsStackExchangeApi.site}`,
      {
        headers: { ...this.headers },
        method: "GET",
      }
    )
      .then(checkResponse)
      .catch((err) => console.log(err));
}

export const stackExchangeApi = new StackExchangeApi(
  optionsStackExchangeApi,
  headers
);
