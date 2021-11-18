export const setTokenLocalStorage = (token: string) => {
  localStorage.setItem(process.env.REACT_APP_TOKEN_NAME as string, token);
};

export const setInfoUserLocalStorage = () => {};
