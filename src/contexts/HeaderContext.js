import React, { createContext, useState } from "react";

export const HeaderContext = createContext();

const HeaderContextProvider = (props) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <HeaderContext.Provider
      value={{ disabled: disabled, setDisabled: setDisabled }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
