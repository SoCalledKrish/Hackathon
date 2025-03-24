import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DataSource from "./pages/Datasource";
import POCLocalDataset from "./pages/POCLocaldataset";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/datasource" element={<DataSource />} />
        <Route path="/local-dataset" element={<POCLocalDataset/>} />
      </Routes>
    </Router>
  );
}

export default App;
