import "./App.scss";

import Messages from "./components/Messages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Home from "./components/Home/Home";
import Purchases from "./components/Purchases/Purchases";
import Returns from "./components/People/People";
import Gallery from "./components/Gallery/Gallery";
import Analytics from "./components/Analytics/Analytics";

import React from "react";
import UserView from "./components/Profile/UserView/UserView";

import Profile from "./components/Profile/Profile";
import { useTypedSelector } from "./hooks/useTypedSelector";

import AppMain from "./components-main/Main";
import Log from "./components-main/Authorization";
import Signup from "./components/Authorization/Signup/Signup";
import Authorization from "./components/Authorization/Login/Login";
import Recovery from "./components/Authorization/Recovery/Recovery";

function App() {
  const isDark = useTypedSelector(
    (state) => state.settings_reducer.themeIsDark
  );
  return (
    <BrowserRouter>
      <div className={"wrapper" + (isDark ? " body-dark" : "")}>
        <Routes>
          <Route path="/" element={<AppMain />}>
            <Route path="Home" element={<Home />} />
            <Route path="" element={<Profile />} />
            <Route path="User/:id" element={<UserView />} />
            <Route path="Messages" element={<Messages />} />

            <Route path="Purchases" element={<Purchases />} />
            <Route path="People" element={<Returns />} />
            <Route path="Gallery" element={<Gallery />} />

            <Route path="Analytics" element={<Analytics />} />

            <Route path="Settings" element={<Settings />} />
          </Route>

          <Route path="/auth" element={<Log />}>
            <Route path="Signup" element={<Signup />} />
            <Route path="Log" element={<Authorization />} />
            <Route path="Recovery" element={<Recovery />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
