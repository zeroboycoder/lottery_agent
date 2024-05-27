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
        <Route path="/login" element=<LoginPage /> />
        <Route path="/createbet" element=<CreateBetPage /> />
        <Route path="/latestbets" element=<LatestBetPage /> />
        <Route path="/winningnumers" element=<WinningNumberPage /> />
        <Route path="/winnerlists" element=<WinnerListPage /> />
        <Route path="/" exact element=<HomePage /> />
      </Routes>
    </Layout>
  );
};

export default App;
