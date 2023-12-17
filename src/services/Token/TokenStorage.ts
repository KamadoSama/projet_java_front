export const deleteToken = (token: string) => {
  localStorage.removeItem(token);
};

export const getToken = (token: string) => {
  return localStorage.getItem(token);
};

export const saveToken = (token: string, valueToken: string) => {
  return localStorage.setItem(token, valueToken);
};
