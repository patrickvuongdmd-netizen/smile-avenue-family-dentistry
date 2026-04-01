import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Accessibility toggle
(window as any).toggleAccessibility = () => {
  document.documentElement.classList.toggle("a11y-mode");
};

createRoot(document.getElementById("root")!).render(<App />);
