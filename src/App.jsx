import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Stack from "./dir/stack/Stack";
import { AuthProvider } from "./dir/context/userAuth/useAuth";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Stack />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
