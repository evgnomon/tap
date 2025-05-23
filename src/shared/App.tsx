import { Routes, Route } from "react-router-dom";
import Home from "@shared/pages/Home";
import About from "@shared/pages/About";
import Layout from "@shared/components/Layout";
import { ThemeProvider } from "@shared/context/ThemeContext";
import PrivacyStatement from "./content/posts/PrivacyArticle";
import Page from "./pages/Page";
import Resources from "./pages/Resources";
import MemoryPage from "./pages/Memory";

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
          <Route path="/pages" element={<Page />}>
            <Route path="privacy" element={<PrivacyStatement />} />
          </Route>
          <Route path="/resources" element={<Resources />}>
            <Route path="memory" element={<MemoryPage />} />
          </Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
