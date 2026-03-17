import { useState } from "react";
import Home from "./pages/Home";
import Import from "./pages/Import";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home goImport={() => setPage("import")} />}
      {page === "import" && <Import goHome={() => setPage("home")} />}
    </>
  );
}
