import React, { useRef, useEffect } from "react";
import WebViewer, { Core } from "@pdftron/webviewer";
import "./App.css";

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: "/files/PDFTRON_about.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;

      documentViewer.addEventListener("documentLoaded", () => {
        console.log("Fit mode: ", documentViewer.getFitMode());
        documentViewer.setFitMode(Core.DocumentViewer.FitMode.FitWidth);
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
