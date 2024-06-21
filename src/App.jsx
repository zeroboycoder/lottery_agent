import { Routes, Route } from "react-router-dom";
import Layout from "./hoc/layout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreateBetPage from "./pages/CreateBetPage";
import LatestBetPage from "./pages/LatestBetPage";
import WinningNumberPage from "./pages/WinningNumberPage";
import WinnerListPage from "./pages/WinnerListPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/agent/login" element=<LoginPage /> />
        <Route path="/agent/createbet" element=<CreateBetPage /> />
        <Route path="/agent/latestbets" element=<LatestBetPage /> />
        <Route path="/agent/winningnumers" element=<WinningNumberPage /> />
        <Route path="/agent/winnerlists" element=<WinnerListPage /> />
        <Route path="/agent/" exact element=<HomePage /> />
      </Routes>
    </Layout>
  );
};

export default App;
