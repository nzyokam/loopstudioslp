import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./Home.jsx";
import Events from "./Events.jsx";
import Careers from "./Careers.jsx";
import Support from "./Support.jsx";
import NoPage from "./NoPage.jsx";
import { AnimatePresence } from "framer-motion";
import Products from "./Products.jsx";
import Layout from "./Components/ui/Layout.jsx";

const AppContent = () => {
  const location = useLocation();
  return (
    <Layout currentPath={location.pathname}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Careers" element={<Careers />} />{" "}
        <Route path="/Events" element={<Events />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Support" element={<Support />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <AppContent />
      </AnimatePresence>
    </Router>
  );
};

export default App;
