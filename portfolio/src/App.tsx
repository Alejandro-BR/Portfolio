import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { useEffect, useState } from "react";

function App() {
  
  const [, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
