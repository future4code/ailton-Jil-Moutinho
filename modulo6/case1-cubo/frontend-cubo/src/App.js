import React from "react";
import { GlobalState } from "./global/GlobalState";
import { Routers } from "./routes/Router";

function App() {
  return (
    <GlobalState>
      <Routers/>
    </GlobalState>
  );
}

export default App;
