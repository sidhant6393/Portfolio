import React from "react";
import { Routes } from "./routes/Routes";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        // Set the document title
        document.title = "Sidhant-Portfolio";
    }, []);
    return <Routes />;
}

export default App;
