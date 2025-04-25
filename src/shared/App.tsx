import { Routes, Route } from "react-router-dom";
import Home from "@shared/pages/Home";
import About from "@shared/pages/About";
import Layout from "@shared/components/Layout";

interface AppProps {
  isServer?: boolean;
  url?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
