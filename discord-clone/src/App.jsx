import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DirectMessageSidebar from "./components/DirectMessageSidebar";

const App = () => {
  const [activeSection, setActiveSection] = useState("dm");

  return (
    <div className="flex">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "dm" && <DirectMessageSidebar />}
    </div>
  );
};

export default App;
