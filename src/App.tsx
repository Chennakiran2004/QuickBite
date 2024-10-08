import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeCarousel from "./components/HomeCarousel";
import SignIn from "./components/SignIn";
import TodaysMenu from "./components/TodaysMenu";
import { TabProvider } from "./Context/TabContext";
import PreviousOrders from "./components/PreviousOrders";
import SearchPage from "./components/SearchPage";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileInfo from "./components/ProfileInfo";
import VendorHomePage from "./components/VendorPage";
import AddItemForm from "./components/AddItemForm";

function App() {
  return (
    <div className="App">
      <TabProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeCarousel />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/vendorHomePage" element={<VendorHomePage />} />
            <Route path="/addItemForm" element={<AddItemForm />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/TodaysMenu" element={<TodaysMenu />} />
              <Route path="/orders" element={<PreviousOrders />} />
              <Route path="/searchPage" element={<SearchPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profileInfo" element={<ProfileInfo />} />
            </Route>
          </Routes>
        </Router>
      </TabProvider>
    </div>
  );
}

export default App;
