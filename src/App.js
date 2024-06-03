import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertFrequency from "./components/components/AlertFrequency";
import AlertsByCategory from "./components/components/AlertsByCategory";
import AlertsBySeverity from "./components/components/AlertsBySeverity";

function App() {
  return (
    <div className="Navbar">
      <div
        class="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div class="bg-dark p-4">
          <h5 class="text-body-emphasis h4">Collapsed content</h5>
          <span class="text-body-secondary">
            Toggleable via the navbar brand.
          </span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>Dashboard</span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="Container" style={{ backgroundColor: "black" }}>
        <div className="Container1" style={{ width: "50%", height: "50%" }}>
          <AlertFrequency />
        </div>
        <div className="Container2" style={{ width: "100%", height: "100%" }}>
          <div style={{ marginLeft: "50%" }}>
            <AlertsByCategory />
          </div>
        </div>
        <div
          className="Container3"
          style={{
            width: "50%",
            height: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AlertsBySeverity />
        </div>
      </div>
    </div>
  );
}

export default App;
