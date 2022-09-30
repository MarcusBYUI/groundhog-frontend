export const getFromLocalStorage = (key) => {
  const expiry = JSON.parse(localStorage.getItem("expiry"));
  if (new Date().getTime() > expiry) {
    localStorage.removeItem("connection");
    localStorage.removeItem("authState");
    return false;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
