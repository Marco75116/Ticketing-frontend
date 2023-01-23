import React, { createContext, useState } from "react";
export const HomeContext = createContext({});

const HomeProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        showForm,
        setShowForm,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
