import { LogoSvg } from "@/assets/logo";
import { useTheme } from "../../provides/ThemeContext";
import styles from "./Header.module.scss";
import ThemeButton from "../themeButton/ThemeButton";

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={`${styles.container}`}>
        <div className={`${isDark ? styles.darkIcon : styles.lightIcon}`}>
          <LogoSvg />
        </div>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
