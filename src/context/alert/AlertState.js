import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

import { SHOW_ALERT, HIDE_ALERT } from "../types";

const AlertState = (props) => {
  // Initial State
  const initialState = null;

  // Dispatcher Reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // ----------------------- ACTIONS -----------------------
  // Show Alert
  const showAlert = (msg, type) => {
    dispatch({ type: SHOW_ALERT, payload: { msg, type } });

    setTimeout(hideAlert, 5000);
  };

  // Hide Alert
  const hideAlert = () => dispatch({ type: HIDE_ALERT });

  // Return the CONTEXT PROVIDER
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
