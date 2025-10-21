import { useTheme } from "../../provides/ThemeContext";
import { DarkSvg } from "../../assets/theme/dark";
import { LightSvg } from "../../assets/theme/light";
import styles from "./ThemeButton.module.scss";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`${styles.button} ${isDark ? styles.dark : styles.light}`}
    >
      {isDark ? <LightSvg /> : <DarkSvg />}
    </button>
  );
};

export default ThemeButton;
