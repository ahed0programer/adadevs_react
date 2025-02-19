import "./themeToggler.css";

export default function ThemeToggler() {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={switchTheme} />
      <span className="slider round" />
    </label>
  );
}
