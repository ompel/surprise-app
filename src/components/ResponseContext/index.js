import React, { useState } from "react";
const ResponseContext = React.createContext();
const SetResponseContext = React.createContext();

function ResponseProvider({ children }) {
  const [response, setResponse] = useState(null);
  return (
    <ResponseContext.Provider value={response}>
      <SetResponseContext.Provider value={setResponse}>
        {children}
      </SetResponseContext.Provider>
    </ResponseContext.Provider>
  );
}
function useResponse() {
  const context = React.useContext(ResponseContext);
  if (context === undefined) {
    throw new Error("useResponse must be used within a ResponseProvider");
  }
  return context;
}
function useSetResponse() {
  const context = React.useContext(SetResponseContext);
  if (context === undefined) {
    throw new Error("useSetResponse must be used within a ResponseProvider");
  }
  return context;
}
export { ResponseProvider, useResponse, useSetResponse };
