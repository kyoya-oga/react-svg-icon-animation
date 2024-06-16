// src/SearchIcon.js
import React, { useState } from "react";
import "./SearchIcon.css";

const SearchIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="icon-container" onClick={toggleIcon}>
      {isOpen ? (
        <svg
          className="icon cross"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="4" x2="20" y2="20" stroke="#fff" strokeWidth="2" />
          <line x1="4" y1="20" x2="20" y2="4" stroke="#fff" strokeWidth="2" />
        </svg>
      ) : (
        <svg
          className="icon search"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            cx="10"
            cy="10"
            r="7"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
          <line x1="15" y1="15" x2="20" y2="20" stroke="#fff" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

export default SearchIcon;
