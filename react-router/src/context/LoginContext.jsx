import React, { useContext, useReducer, useEffect } from "react";

const LoginContext = React.createContext();

const useLoginContext = () => {
  return useContext(LoginContext);
};

const initialState = {
  logged: localStorage.getItem("logged") === "true" ? true : false 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN": {
      localStorage.setItem("logged", "true"); 
      return {
        ...state,
        logged: true
      };
    }
    case "SET_LOGGEDOUT": {
      localStorage.setItem("logged", "false");
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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    localStorage.setItem("logged", state.logged);
  }, [state.logged]);

  return (
    <LoginContext.Provider value={{ logged: state.logged, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useLoginContext };


