import React from "react";

function Nav() {
  return (
    <div>
      <div>
        <ul>
          <li className="web_name">Icrowdtask</li>
          <li>
            <a href="#home">How it works</a>
          </li>
          <li>
            <a href="#news">Requesters</a>
          </li>
          <li>
            <a href="#contact">Worker</a>
          </li>
          <li>
            <a href="#contact">Pricing</a>
          </li>
          <li>
            <a href="#contact">About</a>
          </li>
          <li style={{ float: "right" }}>
            <a className="active" href="#about">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
