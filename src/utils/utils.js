export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    const error = new Error(`Ошибка ${res.status}: ${res.statusText}`);
    error.status = res.status;
    return Promise.reject(error);
  }
};

export const convertQuestions = (questions) =>
  questions.map((question) => {
    const newQuestion = {
      id: question.question_id,
      ownerId: question.owner.user_id,
      ownerName: question.owner.display_name,
      title: question.title,
      answerCount: question.answer_count,
      tags: question.tags,
    };
    return newQuestion;
  });
