// Header.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

const imagePaths = {
    avatar: require('../assets/image/ashley.png'),
    down: require('../assets/image/icons/down.svg').default,
    notification: require('../assets/image/icons/notification.svg').default,
    search: require('../assets/image/icons/search.svg').default,
    hamburgerMenu: require('../assets/image/icons/hamburger-menu.svg').default,
};
const user = { name: 'Ashley H.', avatar: imagePaths.avatar };

const Header = ({ toggleSidebar, handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggle = () => {
        toggleSidebar();
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        handleSearch(value);
    };

  return (
    <header className="header" style={{height: '100px', borderBottom: "1px solid #E8E8E8"}}>
        <div className='container-fluid d-flex align-items-center h-100 px-3'>
            <div className='w-100 d-flex'>
            
                <img className='hamburger-menu cursor-pointer' src={imagePaths.hamburgerMenu} alt="search" style={{width: "40px"}} onClick={handleToggle} />
                <div className="w-50 d-flex justify-content-between align-items-center" v-click-outside="onOutsideClick">
                    <div className="input-group py-1 rounded-2">
                        <span className="input-group-text border-0 bg-white">
                            <img src={imagePaths.search} alt="search" />
                        </span>
                        <input
                            type="text"
                            className="form-control border-0 bg-input search-input"
                            placeholder="Search Data"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            style={{ fontSize: '18px' }}
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        {/* <input 
                            type="text" 
                            className="form-control border-0 bg-input search-input" 
                            placeholder="Search Data" 
                            aria-label="Search" 
                            aria-describedby="basic-addon1"
                            style={{ fontSize: '18px' }}
                        /> */}
                    </div>
                </div>
                <div className='w-50 d-flex justify-content-end'>
                    <div className="avatar d-flex align-items-center me-5 cursor-pointer">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'transparent', border: "none"}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H13C12.3479 2.86394 11.9967 3.91762 12 5C12 5.25138 12.0187 5.50241 12.056 5.751H12C10.7799 5.67197 9.60301 6.21765 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16 10.289 15.993 10.086 15.979 9.9C16.6405 10.0366 17.3226 10.039 17.985 9.907C17.996 10.118 18 10.319 18 10.507V16L20 17V19ZM17 8C16.3958 8.00073 15.8055 7.81839 15.307 7.477C14.1288 6.67158 13.6811 5.14761 14.2365 3.8329C14.7919 2.5182 16.1966 1.77678 17.5954 2.06004C18.9942 2.34329 19.9998 3.5728 20 5C20 6.65685 18.6569 8 17 8Z" fill="#343A40"/>
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Notification</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div className="avatar d-flex align-items-center cursor-pointer">
                        <img src={user.avatar} alt={user.name} />
                        <p className='m-0 ms-2' style={{fontSize: '15px'}}>{user.name}</p>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'transparent', border: "none"}}>
                            <img className='m-0 ms-2' src={imagePaths.down} alt="" id="dropdown-basic"/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default Header;
