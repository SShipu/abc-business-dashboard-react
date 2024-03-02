// Overview.js
import React from "react";
import Card from "../views/commons/Card.js";
import Dropdown from 'react-bootstrap/Dropdown';

const imagePaths = {
    ellipse: require("../assets/image/ellipse.png"),
    circleCheck: require("../assets/image/icons/circle_check.png"),
    calendar: require("../assets/image/icons/calendar.svg").default,
    down: require("../assets/image/icons/down.svg").default,
    drag: require("../assets/image/icons/drag.svg").default,
    menu: require("../assets/image/icons/menu.svg").default,
    right: require("../assets/image/icons/right.svg").default,
    revenue: require("../assets/image/chart/revenue.png"),
    pie1: require("../assets/image/chart/Pie_CHART2.png"),
    pie2: require("../assets/image/chart/Pie_CHART.png"),
    down2: require("../assets/image/icons/down2.svg").default,
    up: require("../assets/image/icons/up.svg").default,
    right2: require("../assets/image/icons/right2.svg").default,
    star: require("../assets/image/icons/star.svg").default,
    pieChart: require("../assets/image/chart/pieChart.svg").default,
    tick: require("../assets/image/icons/tick.svg").default,
    tickFade: require("../assets/image/icons/tick-fade.svg").default,
    map: require("../assets/image/chart/map.svg").default,
};

const Overview = () => {
    return (
        <div
            className="body overflow-scroll p-4 h-100"
            
        >
            {/* Overview content */}
            <h4 style={{ fontSize: "22px" }}>Overview</h4>
            <div className="d-flex justify-content-between flex-wrap align-items-center mt-4">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={imagePaths.ellipse} alt="" />
                    <div className="ms-4">
                        <h5 className="m-0 d-i d-inline-flex">
                            Blaze | Service Main
                            <p className="ms-4" style={{ marginBottom: "0" }}>
                                <img src={imagePaths.circleCheck} alt="" />
                                <span
                                    className="ms-2"
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "450",
                                        marginLeft: "5px",
                                        marginBottom: "0",
                                        color: "#5F5F5F",
                                    }}
                                >
                                    LIVE
                                </span>
                            </p>
                        </h5>
                        <p
                            className=""
                            style={{
                                fontSize: "11px",
                                fontWeight: "500",
                                marginTop: "5px",
                                marginBottom: "0",
                                color: "#868E96",
                            }}
                        >
                            Created: 24/02/2019
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center bg-white p-2 rounded-2 px-3 theme-box-shadow">
                    <img src={imagePaths.calendar} alt="" />
                    <p className="m-0 ms-2" style={{ fontSize: "12px" }}>
                        19.12.2020 - 25.12.2020
                    </p>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'transparent', border: "none", padding: 0}}>
                            <img className="m-0 ms-3" src={imagePaths.down} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Calendar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row cards">
                <div className="col-12 col-lg-8 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Revenue" subtitle="Report Center" footerTitle="SEE DETAILS">
                        <div className="h-100 p-3 overflow-scroll">
                            {/* body */}

                            <div className="row">
                                <div className="col-12 col-lg-6 col-md-6">
                                    <p>
                                        <span
                                            className=""
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "550",
                                                color: "#ADB5BD",
                                            }}
                                        >
                                            REVENUE
                                        </span>
                                        <span
                                            className="ms-3"
                                            style={{
                                                fontSize: "24px",
                                                fontWeight: "550",
                                            }}
                                        >
                                            1.5M
                                        </span>
                                        <span
                                            className="ms-2"
                                            style={{
                                                fontSize: "16px",
                                                color: "#ADB5BD",
                                            }}
                                        >
                                            -0.8%
                                        </span>
                                    </p>
                                    <img className="w-100" src={imagePaths.revenue} style={{maxHeight: "170px"}} alt="" />
                                    <div className="d-flex justify-content-start align-items-center mt-3">
                                        <div className="d-flex justify-content-start  align-items-center me-4">
                                            <div
                                                className="rounded-circle me-2"
                                                style={{
                                                    width: "12px",
                                                    height: "12px",
                                                    border: "3px solid #339AF0",
                                                }}
                                            ></div>
                                            <span
                                                className=""
                                                style={{
                                                    fontSize: "10.5px",
                                                    fontWeight: "450",
                                                }}
                                            >
                                                TOTAL
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-start  align-items-center me-4">
                                            <div
                                                className="rounded-circle me-2"
                                                style={{
                                                    width: "12px",
                                                    height: "12px",
                                                    border: "3px solid #845EF7",
                                                }}
                                            ></div>
                                            <span
                                                className=""
                                                style={{
                                                    fontSize: "10.5px",
                                                    fontWeight: "450",
                                                }}
                                            >
                                                SERVICE1
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-start  align-items-center me-4">
                                            <div
                                                className="rounded-circle me-2"
                                                style={{
                                                    width: "12px",
                                                    height: "12px",
                                                    border: "3px solid #FF922B",
                                                }}
                                            ></div>
                                            <span
                                                className=""
                                                style={{
                                                    fontSize: "10.5px",
                                                    fontWeight: "450",
                                                }}
                                            >
                                                SERVICE2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-center py-4 py-lg-0 py-md-0">
                                    <div className="d-flex justify-content-start align-items-center mb-2">
                                        <img src={imagePaths.pie1} alt="" />
                                    </div>
                                    <div className="d-flex justify-content-start  align-items-center mt-2">
                                        <img src={imagePaths.pie2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                
                <div className="col-12 col-lg-4 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Activity Monitor" subtitle="Report Center" footerTitle="SEE ALERTS">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            {/* body */}
                            <div className="w-100">
                                <div
                                    className="w-100 rounded-3 py-4 ps-4"
                                    style={{ backgroundColor: "#D3F9D8" }}
                                >
                                    <div className="d-flex justify-content-start align-items-center me-4">
                                        <div
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "52px",
                                                height: "52px",
                                                backgroundColor: "#51CF66",
                                                border: "9px solid #8CE99A",
                                            }}
                                        ></div>
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "13px",
                                                    fontWeight: "450",
                                                }}
                                            >
                                                Keep chillin’
                                            </p>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "11px",
                                                    fontWeight: "450",
                                                }}
                                            >
                                                All 3 monitors are running
                                                smoothly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p
                                        className="m-0"
                                        style={{ fontSize: "11px" }}
                                    >
                                        Recent alerts
                                    </p>
                                    <div
                                        className="overflow-scroll"
                                        style={{ height: "125px" }}
                                    >
                                        <div
                                            className="d-flex justify-content-between align-items-center py-2"
                                            style={{
                                                borderBottom:
                                                    "1px solid #ECF0F2",
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: "450",
                                                        }}
                                                    >
                                                        Dashy_Main
                                                    </span>{" "}
                                                    is up.
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    Nov 24, 2020 | 09:26:08 AM
                                                </p>
                                            </div>
                                            <img
                                                className="mx-2"
                                                src={imagePaths.up}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="d-flex justify-content-between align-items-center py-2"
                                            style={{
                                                borderBottom:
                                                    "1px solid #ECF0F2",
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: "450",
                                                        }}
                                                    >
                                                        Dashy_Main
                                                    </span>{" "}
                                                    is down.
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    Nov 24, 2020 | 09:25:05 AM
                                                </p>
                                            </div>
                                            <img
                                                className="mx-2"
                                                src={imagePaths.down2}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="d-flex justify-content-between align-items-center py-2"
                                            style={{
                                                borderBottom:
                                                    "1px solid #ECF0F2",
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight: "450",
                                                        }}
                                                    >
                                                        Dashy_Main
                                                    </span>{" "}
                                                    is down.
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    Nov 24, 2020 | 09:25:05 AM
                                                </p>
                                            </div>
                                            <img
                                                className="mx-2"
                                                src={imagePaths.down2}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-12 col-lg-4 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Tickets" subtitle="Report Center" footerTitle="SEE ALL TICKETS">
                        <div
                            className="d-flex justify-content-between align-items-start overflow-scroll p-3 pt-0 h-100"
                        >
                            {/* body */}
                            <div className="w-100">
                                <table
                                    className="table"
                                    style={{ fontSize: "14px" }}
                                >
                                    <thead>
                                        <tr>
                                            <td className="py-3" style={{ fontWeight: "450" }}>
                                                Date
                                            </td>
                                            <td className="py-3" style={{ fontWeight: "450" }}>
                                                Topic
                                            </td>
                                            <td className="py-3" style={{ fontWeight: "450" }}>
                                                Status
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    2020/12/22
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    09:59
                                                </p>
                                            </td>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Runtime Error 
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Code: #1002
                                                </p>
                                                </td>
                                            <td className="py-65rem">
                                                <div className="d-flex justify-content-between align-items-center h-100">
                                                    <p
                                                        className="m-0"
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Open
                                                    </p>
                                                    <img src={imagePaths.right2} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    2020/12/22
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    12:54
                                                </p>
                                            </td>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Daily Update
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Renew Issues...
                                                </p>
                                                </td>
                                            <td className="py-65rem">
                                                <div className="d-flex justify-content-between align-items-center h-100">
                                                    <p
                                                        className="m-0"
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Solved
                                                    </p>
                                                    <img src={imagePaths.right2} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    2020/12/22
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    12:54
                                                </p>
                                            </td>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Daily Update
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Renew Issues...
                                                </p>
                                                </td>
                                            <td className="py-65rem">
                                                <div className="d-flex justify-content-between align-items-center h-100">
                                                    <p
                                                        className="m-0"
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Solved
                                                    </p>
                                                    <img src={imagePaths.right2} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    2020/12/22
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    12:54
                                                </p>
                                            </td>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Daily Update
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Renew Issues...
                                                </p>
                                                </td>
                                            <td className="py-65rem">
                                                <div className="d-flex justify-content-between align-items-center h-100">
                                                    <p
                                                        className="m-0"
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Solved
                                                    </p>
                                                    <img src={imagePaths.right2} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    2020/12/22
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    12:54
                                                </p>
                                            </td>
                                            <td className="py-65rem">
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Daily Update
                                                </p>
                                                <p
                                                    className="m-0"
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    Renew Issues...
                                                </p>
                                                </td>
                                            <td className="py-65rem">
                                                <div className="d-flex justify-content-between align-items-center h-100">
                                                    <p
                                                        className="m-0"
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Solved
                                                    </p>
                                                    <img src={imagePaths.right2} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div>
                
                <div className="col-12 col-lg-4 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Customer Reviews" subtitle="Report Center" footerTitle="SEE ALL REVIEWS">
                    <div className="d-flex justify-content-between align-items-start overflow-scroll p-2 pt-0 h-100">
                            {/* body */}
                            <div className="w-100">
                                <div className="py-3" style={{borderBottom: "1px solid #ECF0F2"}}>
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Sally D.
                                                </span>
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "400",
                                                        color: "#737B8B"
                                                    }}
                                                >
                                                    20m ago
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            />
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                5/5
                                            </span>
                                        </p>
                                    </div>
                                    <p
                                        className="m-0 mt-1"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            color: "#ADB5BD"
                                        }}
                                    >
                                        It is over qualified and easy to use, thank you. 
                                    </p>
                                </div>
                                <div className="py-3" style={{borderBottom: "1px solid #ECF0F2"}}>
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Michael K.
                                                </span>
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "400",
                                                        color: "#737B8B"
                                                    }}
                                                >
                                                    1 day ago
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            />
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                2/5
                                            </span>
                                        </p>
                                    </div>
                                    <p
                                        className="m-0 mt-1"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            color: "#ADB5BD"
                                        }}
                                    >
                                        An improvement is needed asap. 
                                    </p>
                                </div>
                                <div className="py-3" style={{borderBottom: "1px solid #ECF0F2"}}>
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Deniz T.
                                                </span>
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "400",
                                                        color: "#737B8B"
                                                    }}
                                                >
                                                    1 day ago
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            />
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                5/5
                                            </span>
                                        </p>
                                    </div>
                                    <p
                                        className="m-0 mt-1"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            color: "#ADB5BD"
                                        }}
                                    >
                                        Works well! 
                                    </p>
                                </div>
                                <div className="py-3" style={{borderBottom: "1px solid #ECF0F2"}}>
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Melissa
                                                </span>
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "400",
                                                        color: "#737B8B"
                                                    }}
                                                >
                                                    3 day ago
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            />
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                5/5
                                            </span>
                                        </p>
                                    </div>
                                    <p
                                        className="m-0 mt-1"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            color: "#ADB5BD"
                                        }}
                                    >
                                        Great service and useful interfaces.
                                    </p>
                                </div>
                                <div className="py-3" style={{borderBottom: "1px solid #ECF0F2"}}>
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Melissa
                                                </span>
                                                <span className="me-2"
                                                    style={{
                                                        fontWeight: "400",
                                                        color: "#737B8B"
                                                    }}
                                                >
                                                    3 day ago
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            />
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                5/5
                                            </span>
                                        </p>
                                    </div>
                                    <p
                                        className="m-0 mt-1"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            color: "#ADB5BD"
                                        }}
                                    >
                                        Great service and useful interfaces.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-12 col-lg-4 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Spendings" subtitle="Report Center" footerTitle="SEE DETAILS">
                        <div className="d-flex justify-content-between align-items-start overflow-hidden p-2 pt-0 h-100" >
                            {/* body */}
                            <div className="w-100 d-flex flex-column justify-content-center align-items-center overflow-hidden py-3">
                                <img src={imagePaths.pieChart} alt="" />
                                <div className="row mt-3 px-3">
                                    <div className="col-6 d-flex justify-content-start align-items-center p-2">
                                        <div
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                border: "3px solid #339AF0",
                                            }}
                                        ></div>
                                        <span
                                            className=""
                                            style={{
                                                fontSize: "10.5px",
                                                fontWeight: "450",
                                            }}
                                        >
                                            SERVER (20%)
                                        </span>
                                    </div>
                                    <div className="col-6 d-flex justify-content-start align-items-center p-2">
                                        <div
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                border: "3px solid #51CF66",
                                            }}
                                        ></div>
                                        <span
                                            className=""
                                            style={{
                                                fontSize: "10.5px",
                                                fontWeight: "450",
                                            }}
                                        >
                                            HOSTING (40%)
                                        </span>
                                    </div>
                                    <div className="col-6 d-flex justify-content-start align-items-center p-2">
                                        <div
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                border: "3px solid #FF922B",
                                            }}
                                        ></div>
                                        <span
                                            className=""
                                            style={{
                                                fontSize: "10.5px",
                                                fontWeight: "450",
                                            }}
                                        >
                                            SERVICES (15%)
                                        </span>
                                    </div>
                                    <div className="col-6 d-flex justify-content-start align-items-center p-2">
                                        <div
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                border: "3px solid #EEEEEF",
                                            }}
                                        ></div>
                                        <span
                                            className=""
                                            style={{
                                                fontSize: "10.5px",
                                                fontWeight: "450",
                                            }}
                                        >
                                            OTHERS (15%)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </Card>
                </div>

                <div className="col-12 col-lg-4 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Users" subtitle="Report Center" footerTitle="SEE ALL USERS">
                        <div className="d-flex justify-content-between align-items-start overflow-scroll p-2 pt-0 h-100" >
                            {/* body */}
                            <div className="w-100 p-4">
                                <div className="py-3" style={{borderBottom: "1px solid #ECF0F2"}}>
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-3"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Ashley  H.
                                                </span>
                                                <span className="me-2 px-3 py-1"
                                                    style={{
                                                        fontSize: "12px",
                                                        fontWeight: "500",
                                                        color: "#51CD65",
                                                        backgroundColor: "#D3F9D8",
                                                        borderRadius: "2px"
                                                    }}
                                                >
                                                    Admin
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            {/* <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            /> */}
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                2019/06/24
                                            </span>
                                        </p>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tick} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Manage User Accounts
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tick} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Edit Company Info
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tick} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                See Analytics
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tick} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Export Data
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        
                                    >
                                        <div>
                                            <p
                                                className="m-0"
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <span className="me-3"
                                                    style={{
                                                        fontWeight: "450",
                                                    }}
                                                >
                                                    Jack E.
                                                </span>
                                                <span className="me-2 px-3 py-1"
                                                    style={{
                                                        fontSize: "12px",
                                                        fontWeight: "500",
                                                        color: "#339AEF",
                                                        backgroundColor: "#D0EBFF",
                                                        borderRadius: "2px"
                                                    }}
                                                >
                                                    User
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <p
                                            className="m-0"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            {/* <img
                                                className="mx-2"
                                                src={imagePaths.star}
                                                alt=""
                                            /> */}
                                            <span className="me-2"
                                                style={{
                                                    fontWeight: "400",
                                                }}
                                            >
                                                2019/06/24
                                            </span>
                                        </p>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tick} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                Manage User Accounts
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tickFade} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                    color: "#ADB5BD"
                                                }}
                                            >
                                                Edit Company Info
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tickFade} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                    color: "#ADB5BD"
                                                }}
                                            >
                                                See Analytics
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-start align-items-center py-1">
                                            <img src={imagePaths.tickFade} alt="" />
                                            <span
                                                className="ms-1"
                                                style={{
                                                    fontSize: "10px",
                                                    fontWeight: "400",
                                                    color: "#ADB5BD"
                                                }}
                                            >
                                                Export Data
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="col-12 col-lg-8 mt-4 px-2">
                    <Card imagePaths={imagePaths} title="Audience Map Location" subtitle="Report Center" footerTitle="SEE DETAILS">
                        <div className="p-3 overflow-scroll h-100" >
                            {/* body */}

                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <div className="pb-2">
                                        <p
                                            className="d-flex justify-content-between align-items-center m-0 mb-1"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <span className="me-3"
                                                style={{
                                                    fontWeight: "450",
                                                }}
                                            >
                                                Europe
                                            </span>
                                            <span className="me-2 px-3 py-1"
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "450",
                                                    color: "#868E96",
                                                }}
                                            >
                                                580 Users
                                            </span>
                                            
                                        </p>
                                        <div className="progress-bar-container"> 
                                            <div className="progress-bar" style={{width: "45%"}}></div> 
                                        </div>  
                                    </div>
                                    <div className="pb-2">
                                        <p
                                            className="d-flex justify-content-between align-items-center m-0 mb-1"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <span className="me-3"
                                                style={{
                                                    fontWeight: "450",
                                                }}
                                            >
                                                Europe
                                            </span>
                                            <span className="me-2 px-3 py-1"
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "450",
                                                    color: "#868E96",
                                                }}
                                            >
                                                580 Users
                                            </span>
                                            
                                        </p>
                                        <div className="progress-bar-container"> 
                                            <div className="progress-bar" style={{width: "45%"}}></div> 
                                        </div>  
                                    </div>
                                    <div className="pb-2">
                                        <p
                                            className="d-flex justify-content-between align-items-center m-0 mb-1"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <span className="me-3"
                                                style={{
                                                    fontWeight: "450",
                                                }}
                                            >
                                                Europe
                                            </span>
                                            <span className="me-2 px-3 py-1"
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "450",
                                                    color: "#868E96",
                                                }}
                                            >
                                                580 Users
                                            </span>
                                            
                                        </p>
                                        <div className="progress-bar-container"> 
                                            <div className="progress-bar" style={{width: "45%"}}></div> 
                                        </div>  
                                    </div>
                                    <div className="pb-2">
                                        <p
                                            className="d-flex justify-content-between align-items-center m-0 mb-1"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <span className="me-3"
                                                style={{
                                                    fontWeight: "450",
                                                }}
                                            >
                                                Europe
                                            </span>
                                            <span className="me-2 px-3 py-1"
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "450",
                                                    color: "#868E96",
                                                }}
                                            >
                                                580 Users
                                            </span>
                                            
                                        </p>
                                        <div className="progress-bar-container"> 
                                            <div className="progress-bar" style={{width: "45%"}}></div> 
                                        </div>  
                                    </div>
                                    <div className="pb-2">
                                        <p
                                            className="d-flex justify-content-between align-items-center m-0 mb-1"
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            <span className="me-3"
                                                style={{
                                                    fontWeight: "450",
                                                }}
                                            >
                                                Europe
                                            </span>
                                            <span className="me-2 px-3 py-1"
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "450",
                                                    color: "#868E96",
                                                }}
                                            >
                                                580 Users
                                            </span>
                                            
                                        </p>
                                        <div className="progress-bar-container"> 
                                            <div className="progress-bar" style={{width: "45%"}}></div> 
                                        </div>  
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 d-flex justify-content-center">
                                    
                                    <img className="map-img" src={imagePaths.map} alt="" />
                                    
                                </div>
                                
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Overview;
