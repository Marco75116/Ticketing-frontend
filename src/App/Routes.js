import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import ContainerLandingPage from "../Pages/LandingPage/ContainerLandingPage";
import ContainerApp from "../Pages/App/ContainerApp";
import Profile from "../Pages/App/Profile/Profile";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<ContainerLandingPage />} />
      <Route path="/app" element={<ContainerApp />}>
        <Route path=":profile" element={<Profile />} />
      </Route>
    </AppRoutes>
  );
};

export default Routes;
