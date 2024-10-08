// Header.jsx
import React, { useState } from 'react';
import '../assets/css/Header.css';
import '../assets/css/PopupForm.css';
import PopupForm from './PopupForm.jsx';
import logo from './sms.png';

function Header({ onSearch }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query to the parent component
  };

  return (
    <header>
       <img src={logo} alt="logo" className="logo" />
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
        <input
          id="query"
          className="input"
          type="search"
          placeholder="Search..."
          name="searchbar"
          value={searchQuery} // Controlled input
          onChange={handleSearchChange} // Handle input change
        />
      </div>     
      <button className="button" onClick={handleButtonClick}>
        <svg
          id="UploadToCloud"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          className="icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path
            className="color000000 svgShape"
            fill="#000000"
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
          ></path>
        </svg>
        <span className="upload-text">Upload</span>
      </button>
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
      <label className="popup">
        <input type="checkbox" />
        <div tabIndex="0" className="burger">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
            ></path>
          </svg>
        </div>
        <nav className="popup-window">
          <legend>Quick Start</legend>
          <ul>
            <li>
              <button>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
           <path
                    d="M19 4v6.406l-3.753 3.741-6.463-6.462 3.7-3.685h6.516zm2-2h-12.388l1.497 1.5-4.171 4.167 9.291 9.291 4.161-4.193 1.61 1.623v-12.388zm-5 4c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm6.708.292l-.708.708v3.097l2-2.065-1.292-1.74zm-12.675 9.294l-1.414 1.414h-2.619v2h-2v2h-2v-2.17l5.636-5.626-1.417-1.407-6.219 6.203v5h6v-2h2v-2h2l1.729-1.729-1.696-1.685z"
                  ></path>
                </svg>
                <span className="profile-text">Admin <br />Login</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
    </header>
  );
}

export default Header;
