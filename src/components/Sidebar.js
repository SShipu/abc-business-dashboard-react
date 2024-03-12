import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Sidebar = ({ isSidebarOpen, toggleSidebar, activeTab, handleTabChange }) => {

    const imagePaths = {
        logo: require('../assets/image/logo.svg').default,
        dashboardWhite: require('../assets/image/icons/dashboardWhite.svg').default,
        dashboardBlack: require('../assets/image/icons/dashboardBlack.svg').default,
        documentsWhite: require('../assets/image/icons/documentsWhite.svg').default,
        documentsBlack: require('../assets/image/icons/documentsBlack.svg').default,
        reportWhite: require('../assets/image/icons/reportWhite.svg').default,
        reportBlack: require('../assets/image/icons/reportBlack.svg').default,
        messagesWhite: require('../assets/image/icons/messagesWhite.svg').default,
        messagesBlack: require('../assets/image/icons/messagesBlack.svg').default,
        paymentWhite: require('../assets/image/icons/paymentWhite.svg').default,
        paymentBlack: require('../assets/image/icons/paymentBlack.svg').default,
        userWhite: require('../assets/image/icons/userWhite.svg').default,
        userBlack: require('../assets/image/icons/userBlack.svg').default,
        settingsWhite: require('../assets/image/icons/settingsWhite.svg').default,
        settingsBlack: require('../assets/image/icons/settingsBlack.svg').default,
        avatar: require('../assets/image/ashley.png').default,
        avatar: require('../assets/image/ashley.png').default,
    };

    const [tabs, setTabs] = useState([
        { id: 1, label: 'Overview', active: true, icon: imagePaths.dashboardWhite, iconDark: imagePaths.dashboardBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'main menu' },
        { id: 2, label: 'Documents', active: false, icon: imagePaths.documentsWhite, iconDark: imagePaths.documentsBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'main menu' },
        { id: 3, label: 'Payments', active: false, icon: imagePaths.paymentWhite, iconDark: imagePaths.paymentBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'main menu' },
        { id: 4, label: 'Messages', active: false, icon: imagePaths.messagesWhite, iconDark: imagePaths.messagesBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'main menu' },
        { id: 5, label: 'Report Center', active: false, icon: imagePaths.reportWhite, iconDark: imagePaths.reportBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'main menu' },
        { id: 11, label: 'Users', active: false, icon: imagePaths.userWhite, iconDark: imagePaths.userBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'preference' },
        { id: 12, label: 'Settings', active: false, icon: imagePaths.settingsWhite, iconDark: imagePaths.settingsBlack, activeColor: "white", activeBackgroundColor: "#343A40", category: 'preference' },
    ]);

    const handleToggle = () => {
        toggleSidebar(!isSidebarOpen);
    };

    const handleTabClick = (label) => {
        const updatedTabs = tabs.map(tab => ({
            ...tab,
            active: tab.label === label,
        }));
        setTabs(updatedTabs);
        handleTabChange(label);
        toggleSidebar();
    };

    return (
        <aside className="sidebar mobile-view" id='sidebar' style={{ backgroundColor: "white", height: "100%", borderRight: "1px solid #E8E8E8"}}>
            <main className='overflow-y-scroll h-100'>
                <div className='d-flex align-items-center justify-content-center cursor-pointer' style={{height: "100px"}} onClick={() => handleToggle()}>
                    <img src={imagePaths.logo} alt="" />
                    <div className='ms-2' >
                        <h3 className='m-0 text-start' style={{ fontWeight:"550"}}>ABC</h3>
                        <p  className='m-0' style={{fontSize: "13px", color: "rgba(0,0,0,.4)"}}>Business & Consulting</p>
                    </div>
                </div>
                {['main menu', 'preference'].map(category => (
                    <div key={category} className='h-auto' style={{padding: "25px"}}>
                        <p className='' style={{fontSize: "15px", color: "#868E96", fontWeight: "500"}}>{category.toUpperCase()}</p>
                        {tabs.filter(tab => tab.category === category).map(tab => (
                            <div key={tab.id} className="py-3 px-4 d-flex align-items-center rounded-1 cursor-pointer" style={{ backgroundColor: tab.active ? tab.activeBackgroundColor : "white", color: tab.active ? tab.activeColor : "rgba(0,0,0,1)" }} onClick={() => handleTabClick(tab.label)}>
                                <img src={tab.active ? tab.icon : tab.iconDark} alt="" />
                                <p className='m-0 ms-2' style={{ fontSize: "15px", fontWeight: "450" }}>{tab.label}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <div className='h-auto' style={{padding: "15px"}}>
                    <div className='py-3 px-4 d-flex align-items-center justify-content-center rounded-1' style={{backgroundColor: "#FFF9DB",}}>
                        <div className=''>
                            <p className='m-0 ms-2 text-center' style={{fontSize: "15px", fontWeight: "550", color: "#FC912B"}}>Upgrade to </p>
                            <p className='m-0 ms-2 text-center' style={{fontSize: "15px", fontWeight: "550", color: "#FC912B"}}>Enterprise Account!</p>
                            <p className='m-0 ms-2 text-center mt-1' style={{fontSize: "13px", fontWeight: "400"}}>Increase your sales by using special features of Enterprise Membership.</p>
                            <div className='d-flex justify-content-center mt-3 mb-2'>
                                <Button className='px-2rem' style={{backgroundColor: "#343A40", color: "#white"}}>Upgrade</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </aside>
    );
}

export default Sidebar;
