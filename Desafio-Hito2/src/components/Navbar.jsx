import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Pizzería Mamma Mia!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav box me-auto">
            <li className="nav-item me-3">
              <a className="nav-link text-white border border-white rounded px-2 py-1" href="#">🍕Home</a>
            </li>
            {token ? (
              <>
                <li className="nav-item me-3">
                  <a className="nav-link text-white border border-white rounded px-2 py-1" href="#">🔓Profile</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link text-white border border-white rounded px-2 py-1" href="#">🔒Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-3">
                  <a className="nav-link text-white border border-white rounded px-2 py-1" href="#">🔐Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white border border-white rounded px-2 py-1" href="#">🔐Register</a>
                </li>
              </>
            )}
          </ul>
          <ul className="nav box">
            <li className="nav-item">
              <a className="nav-link border border-white rounded px-2 py-1 active" aria-current="page" href="#">🛒Total: ${total.toLocaleString()}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;