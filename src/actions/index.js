export const LOGIN = 'LOGIN';
export const GET_SCORE = 'GET_SCORE';
export const UPDATE_PLAYER_TOKEN = 'UPDATE_PLAYER_TOKEN';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const UPDATE_LOADING = 'UPDATE_LOADING';

export function updateLoading(loading) {
  return {
    type: UPDATE_LOADING,
    loading,
  };
}

export function getLogin(name, email) {
  return {
    type: LOGIN,
    name,
    email,
  };
}

export function playerScore(score) {
  return {
    type: GET_SCORE,
    score,
  };
}

export const updatePlayerToken = (token) => ({
  type: UPDATE_PLAYER_TOKEN,
  token,
});

export const addQuestions = (questions) => ({
  type: ADD_QUESTIONS,
  questions,
});

export const getToken = () => async (dispatch) => {
  const apiEndpoint = 'https://opentdb.com/api_token.php?command=request';
  const tokenJson = await (await fetch(apiEndpoint)).json();
  dispatch(updatePlayerToken(tokenJson.token));
  localStorage.setItem('token', tokenJson.token);
};

export const fetchQuestions = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const apiEndpoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const questions = await (await fetch(apiEndpoint)).json();
  await dispatch(addQuestions(questions.results));
};
