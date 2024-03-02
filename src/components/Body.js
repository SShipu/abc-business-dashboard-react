// Body.js
import React from "react";
import Overview from "../pages/Overview.js";
import Documents from "../pages/Documents.js";
import Payments from "../pages/Payments.js";
import Messages from "../pages/Messages.js";
import ReportCenter from "../pages/ReportCenter.js";
import User from "../pages/User.js";
import Settings from "../pages/Settings.js";
import SearchResults from "../pages/SearchResults.js";

const Body = ({ activeTab, searchQuery }) => {
    return (
        <section style={{ backgroundColor: "#FAFAFA", height: "100%" }}>

            {/* Body content */}

            {searchQuery ? (
                <SearchResults query={searchQuery} />
            ) : (
                <>
                    {activeTab === 'Overview' && <Overview />}
                    {activeTab === 'Documents' && <Documents />}
                    {activeTab === 'Payments' && <Payments />}
                    {activeTab === 'Report Center' && <ReportCenter />}
                    {activeTab === 'Messages' && <Messages />}
                    {activeTab === 'Users' && <User />}
                    {activeTab === 'Settings' && <Settings />}
                </>
            )}

            
        </section> 
    );
};

export default Body;
