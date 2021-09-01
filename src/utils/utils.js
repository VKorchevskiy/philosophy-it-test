export const checkResponse = (res) => {
	console.log(res);
	if (res.ok) {
		return res.json();
	} else {
		const error = new Error(`Ошибка ${res.status}: ${res.statusText}`);
		error.status = res.status;
		error.userMessage = res.message;
		return Promise.reject(error);
	}
};
