import React, { useReducer } from "react";
import axios from "axios";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        alert: state.users,
        user: state.user,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default GithubState;
