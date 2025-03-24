import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DataSource from "./pages/Datasource";
import POCLocalDataset from "./pages/POCLocaldataset";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/datasource" element={<DataSource />} />
        <Route path="/local-dataset" element={<POCLocalDataset/>} />
      </Routes>
    </Router>
  );
}

export default App;
