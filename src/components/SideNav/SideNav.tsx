import { Link, useLocation } from "react-router";
import styles from "./SideNav.module.css";
import React from "react";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleNav = () => setIsOpen(!isOpen);
  
  // Verifica se o mouse está na SideNav para dispositivos maiores
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`${styles.sideNav} ${!isOpen ? styles.sideNavClosed : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={isOpen ? "uninter-logo.png" : "logo.jpg"} 
        alt="Logo" 
        onClick={toggleNav}
        style={{ cursor: 'pointer' }}
      />
      
      <ul>
        <button className={styles.toggleButton} onClick={toggleNav}>
          <i className={`bi bi-${isOpen ? 'arrow-left' : 'arrow-right'}`}></i>
        </button>
        
        {[
          { path: "/", icon: "house", label: "Home" },
          { path: "/calculator", icon: "calculator", label: "Calculator" },
          { path: "/calendar", icon: "calendar", label: "Calendário" },
          { path: "/notes", icon: "journal-bookmark-fill", label: "Notas" }
        ].map((item) => (
          <li key={item.path} className={location.pathname === item.path ? styles.active : ''}>
            <Link to={item.path}>
              <i className={`bi bi-${item.icon}`}></i>
              {isOpen && <p>{item.label}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;