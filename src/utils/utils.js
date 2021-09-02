export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    const error = new Error(`Ошибка ${res.status}: ${res.statusText}`);
    error.status = res.status;
    return Promise.reject(error);
  }
};
