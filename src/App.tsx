import "./App.css";
import RouterDom from "./Router";
import { checkToken } from "./helper/utils";

const App = () => {
  if(checkToken() && (window.location.pathname === "/login" || window.location.pathname === "/register")) {
    window.location.href='/questions';
  };

  return (
    <div className="site-main">
        <RouterDom />
    </div>
  );
};

export default App;
