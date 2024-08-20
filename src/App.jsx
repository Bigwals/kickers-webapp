import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME } from "./constants/themeConstants";
import { Dashboard, PageNotFound } from "./screens";
import Applications from "./screens/Applications/Applications";
import 'bootstrap/dist/css/bootstrap.min.css';
import Approved from "./screens/Approved/approved";
import Rejected from "./screens/Rejected/rejected";
import Player from "./screens/Buyer/Buyer";
import CoderOwner from "./screens/Seller/Seller";
import Sales from "./screens/Sales/Sales";
import SendNotification from "./screens/SendNotification/SendNotification";
import ServiceFee from "./screens/ServiceFee/ServiceFee";
import Agents from "./screens/Agents/Agents";
import Home from "./Home";
import PrivacyPolicy from "./components/pri/PrivPolicy";
import TermsAndCondition from "./components/terms/Termsandconditions";
import Login from "./components/login/Login";
import FeactureCourt from "./screens/featurecourt/FeactureCourt";
import CourtOrdersDetails from "./screens/CourtOrderDetails/CourtOrderDetails"
import FieldsDetails from "./screens/FieldsDetails/FieldsDetails"
import ViewAllbookings from "./screens/ViewAllBookings/ViewAllBookings"

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  return isAuthenticated ? children : <Navigate to="/Login" />;
};

const App = () => {
  const { theme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const isAuthenticated = () => !!localStorage.getItem('accessToken');

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/court-owner/CourtOrdersDetails/viewallbookings" element={<ViewAllbookings />} />
        <Route path="/court-owner/CourtOrdersDetails" element={<CourtOrdersDetails />} />
        <Route path="/court-owner/CourtOrdersDetails/FieldsDetails" element={<FieldsDetails />} />
        <Route path="/Terms&Condition" element={<TermsAndCondition />} />
        <Route path="/feature-court" element={<ProtectedRoute><FeactureCourt /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/Pending" element={<ProtectedRoute><Applications /></ProtectedRoute>} />
        <Route path="/Approved" element={<ProtectedRoute><Approved /></ProtectedRoute>} />
        <Route path="/Rejected" element={<ProtectedRoute><Rejected /></ProtectedRoute>} />
        <Route path="/Player" element={<ProtectedRoute><Player /></ProtectedRoute>} />
        <Route path="/court-owner" element={<ProtectedRoute><CoderOwner /></ProtectedRoute>} />
        <Route path="/SendNotification" element={<ProtectedRoute><SendNotification /></ProtectedRoute>} />
        <Route path="/Sales" element={<ProtectedRoute><Sales /></ProtectedRoute>} />
        <Route path="/ServiceFee" element={<ProtectedRoute><ServiceFee /></ProtectedRoute>} />
        <Route path="/Agents" element={<ProtectedRoute><Agents /></ProtectedRoute>} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
