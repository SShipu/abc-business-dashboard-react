// Card.js
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Card = ({ imagePaths, title, subtitle, footerTitle, children }) => {
    return (
        <div className="bg-white theme-box-shadow rounded-3 p-0">
            <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{ borderBottom: "1px solid #ECF0F2" }}
            >
                {/* header */}
                <div className="d-flex justify-content-center align-items-center">
                    <img src={imagePaths.drag} alt="" />
                    <div className="ms-4">
                        <p className="m-0 d-i d-inline-flex">
                            {title}
                        </p>
                        <p
                            className="m-0"
                            style={{
                                fontSize: "14px",
                                color: "#868E96",
                            }}
                        >
                            {subtitle}
                        </p>
                    </div>
                </div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'transparent', border: "none", padding: 0}}>
                        <img src={imagePaths.menu} alt="" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Menu Dropdown</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div style={{ borderBottom: "1px solid #ECF0F2", height: "290px", }}>
                {children}
            </div>
            <div
                className="d-flex justify-content-end align-items-center p-3"
                style={{ borderTop: "1px solid #ECF0F2" }}
            >
                {/* footer */}
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ms-4">
                        <a
                            className="m-0 d-i d-inline-flex text-decoration-none cursor-pointer text-dark"
                            style={{ fontWeight: "450" }}
                        >
                            {footerTitle}
                            <img
                                style={{ marginLeft: "10px" }}
                                src={imagePaths.right}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
