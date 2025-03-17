import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "./i18n"; // Import i18n instance
import "./index.css";
import "./i18n"; 

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}> {/* Wrap your app */}
    <App />
  </I18nextProvider>
);
