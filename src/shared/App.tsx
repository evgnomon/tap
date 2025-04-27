import { Routes, Route } from "react-router-dom";
import Home from "@shared/pages/Home";
import About from "@shared/pages/About";
import Layout from "@shared/components/Layout";
import { ThemeProvider } from "@shared/context/ThemeContext";

interface AppProps {
  isServer?: boolean;
  url?: string;
  initialCookies: Record<string, string>;
}

const App: React.FC<AppProps> = ({ initialCookies }) => {
  return (
    <ThemeProvider initialCookies={initialCookies}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
