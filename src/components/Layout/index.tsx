import React from "react";
import Navbar from "../Navbar";
import Content from "../Content";

const Layout: React.FC = ({children}) => {

    return (
        <>
            <Navbar />
            <div  className="container">
                <Content>
                    {children}
                </Content>
            </div>
        </>
    )
}

export default Layout