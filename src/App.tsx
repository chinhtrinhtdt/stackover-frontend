import React from "react";
import "./App.css";
import Mainpage from "./page/QuestionUI/Index"
const App = () => {

  const renderScreen = () => {
    return <>Hello React</>
  }

  return (
    <div className="site-main">
<Mainpage/>
      {/* {renderScreen()} */}
    </div>  
  );
};

export default App;
