//App.js
import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Body from './components/Body';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Overview'); // 'Overview' Default active tab
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className={`App no-sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`} id='wrapper' style={{ display: 'flex' }}>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} handleTabChange={handleTabChange} />
            <main className="main" id='content' style={{ backgroundColor: 'white', height: '100%'}}>
                <Header toggleSidebar={toggleSidebar} handleSearch={handleSearch} />
                <Body activeTab={activeTab} searchQuery={searchQuery} />
            </main>
            {isSidebarOpen && <div className="sidebar-backdrop fade show" id='sidebarBackdrop' onClick={toggleSidebar}></div>}
        </div>
    );
}

export default App;
