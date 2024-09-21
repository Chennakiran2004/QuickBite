import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomeCarousel from "./components/HomeCarousel";
import SignIn from "./components/SignIn";
// import SignUp from './components/SignUp';
import TodaysMenu from "./components/TodaysMenu";
import { TabProvider } from "./Context/TabContext";
import PreviousOrders from "./components/PreviousOrders";
import SearchPage from "./components/SearchPage";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <TabProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeCarousel />} />
            <Route path="/signIn" element={<SignIn />} />
            {/* <Route path='/signUp' element={<SignUp/>}/> */}
            <Route path="/TodaysMenu" element={<TodaysMenu />} />
            <Route path="/orders" element={<PreviousOrders />} />
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </TabProvider>
    </div>
  );
}

export default App;
