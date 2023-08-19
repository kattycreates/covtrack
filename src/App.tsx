import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./App.css";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import CreateContact from "./pages/CreateContact";
import LineGraph from "./components/LineGraph";
import Map from "./components/Map";
import { QueryClient, QueryClientProvider } from "react-query";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
const queryClient = new QueryClient();
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const state = useSelector((state) => state);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <div>
          <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          <Content />
        </div>

        {/* <Contact />
        <CreateContact />
        <LineGraph /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
