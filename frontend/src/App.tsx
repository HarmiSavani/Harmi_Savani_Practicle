import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";

function App() {

  return (
    <div className='App dark:bg-zinc-900 dark:text-white'>
   <BrowserRouter>
    <Sidebar >
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  )
}

export default App

