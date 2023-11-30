import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Posts
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/new-post"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Add Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contacts"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
