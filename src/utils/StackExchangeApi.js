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
    ).then(checkResponse);

  getUserQuestions = (userId) =>
    fetch(
      `${this.baseUrl}/2.3/users/${userId}/questions?key=${optionsStackExchangeApi.key}&order=desc&sort=votes&site=${optionsStackExchangeApi.site}`,
      {
        headers: { ...this.headers },
        method: "GET",
      }
    ).then(checkResponse);

  getAnswers = (questionId) =>
    fetch(
      `${this.baseUrl}/2.3/questions/${questionId}/answers?key=${optionsStackExchangeApi.key}&site=${optionsStackExchangeApi.site}`,
      {
        headers: { ...this.headers },
        method: "GET",
      }
    ).then(checkResponse);

  getFaq = (tag) =>
    fetch(
      `${this.baseUrl}/2.3/tags/${tag}/faq?key=${optionsStackExchangeApi.key}&order=desc&sort=votes&site=${optionsStackExchangeApi.site}`,
      {
        headers: { ...this.headers },
        method: "GET",
      }
    ).then(checkResponse);
}

export const stackExchangeApi = new StackExchangeApi(
  optionsStackExchangeApi,
  headers
);
