import React from 'react'
import "./Header.scss"
import logo from "../../images/logo.svg"

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div className="login-details">
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </header>
  )
}
