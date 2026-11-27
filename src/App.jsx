import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SettingsProvider } from "./context/SettingsContext";
import ScrollManager from "./components/common/ScrollManager";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <ScrollManager />
        <AppRoutes />
        <Toaster position="top-right" />
      </SettingsProvider>
    </BrowserRouter>
  );
}