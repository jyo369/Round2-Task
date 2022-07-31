import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/page/Login";
import ProtectedRoute from "./Component/page/ProtectedRoute";
import data from "./data/data";
import groupdata from "./data/groupdata";
import ProtectedRouteAdmin from "./Component/page/ProtectedRouteAdmin";
import NavBar from "./Component/page/NavBar";
import Home from "./Component/page/Home";
import Error from "./Component/page/Error";
import About from "./Component/page/About";
import Dashboard from "./Component/USER/Dashboard";
import Admindashboard from "./Component/ADMIN/Admindashboard";
import Groupdashboard from "./Component/USER/Groupdashboard";
import Chat from "./Component/USER/Chat";
function App() {
  const [user, setUser] = useState(null);
  const [groupusers, setgroupusers] = useState(groupdata);
  const [userdata, setuserdata] = useState(data);
  return (
    // <Admindashboard/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route
            path="login"
            element={
              <Login setUser={setUser} key={userdata.id} userdata={userdata} />
            }
          />
        </Route>
        <Route
          path="dashboard/chat"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard/group"
          element={
            <ProtectedRoute user={user}>
              <Groupdashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin-dashboard"
          element={
            <ProtectedRouteAdmin user={user}>
              <Admindashboard user={user} />
            </ProtectedRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
