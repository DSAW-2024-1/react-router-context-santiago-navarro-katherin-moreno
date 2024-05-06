import React, { useContext, useReducer, useEffect } from "react";

const LoginContext = React.createContext();

const useLoginContext = () => {
  return useContext(LoginContext);
};



const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN": {
      

      return {
        ...state,
        logged: true
      };

    }
    case "SET_LOGGEDOUT": {
      localStorage.removeItem('logged');

      return {
        ...state,
        logged: false
      };
    }
    default:
      return state;
  }
};

const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {logged: localStorage.getItem("logged") === "true" });

  useEffect(() => {
   if(state.logged) {
    localStorage.setItem("logged", state.logged);
   }
    
  }, [state.logged]);

  return (
    <LoginContext.Provider value={{ logged: state.logged, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useLoginContext };


