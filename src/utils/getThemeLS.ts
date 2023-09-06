export const getThemeLS = () => {
  const theme = localStorage.getItem("theme");

  return theme ? JSON.parse(theme) : false;
};
