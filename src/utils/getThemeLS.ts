export const getThemeLS = () => {
    let theme = localStorage.getItem("theme");

    return theme ? JSON.parse(theme) : false;
}