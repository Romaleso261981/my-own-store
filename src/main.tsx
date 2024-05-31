import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
