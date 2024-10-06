import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <main className="text-foreground bg-background h-[100%] w-[100%]">
        <App/>
    </main>
  </NextUIProvider>
);