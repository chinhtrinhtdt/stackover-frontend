import React from "react";
import "./App.css";

const App = () => {

  const renderScreen = () => {
    return <>Hello</>
  }

  return (
    <div className="site-main">
      {renderScreen()}
    </div>
  );
};

export default App;
