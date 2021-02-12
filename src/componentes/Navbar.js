import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div class="header">
      <div class="grid">
        <div class="title">
          <h1>Arauz Tracker</h1>
        </div>
        <div class="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Ingresos</a>
            </li>
            <li>
              <a href="#">Gastos</a>
            </li>
            <li>
              <a href="#">Cuentas</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
