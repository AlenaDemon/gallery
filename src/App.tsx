import GalleryPage from "./pages/GalleryPage";
import Header from "./components/header/Header";
import { useTheme } from "./provides/ThemeContext";

const App: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <GalleryPage />
    </div>
  );
};

export default App;
