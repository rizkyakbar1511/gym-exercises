import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;