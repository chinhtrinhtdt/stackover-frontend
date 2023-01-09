import { createContext, useState } from "react";
import "./App.css";
import RouterDom from "./Router";
import { IParamAuthContext } from "./interfaces/api.interfaces";

export const AuthContext = createContext<IParamAuthContext>({
  authed: false,
  setAuthed: () => { }
});

const App = () => {
  const [authed, setAuthed] = useState<boolean>(false);

  return (
    <div className="site-main">
      <AuthContext.Provider value={{ authed, setAuthed }}>
        <RouterDom />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
