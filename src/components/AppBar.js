import React from "react";

export default () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <a className="navbar-brand">
        <h1>
          <strong>Verabot</strong>
        </h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="javascript.void(0);">
              <strong>Home</strong> <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="javascript.void(0);">
              <strong>Nosotros</strong> <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="javascript.void(0);">
              <strong>Historias</strong> <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
