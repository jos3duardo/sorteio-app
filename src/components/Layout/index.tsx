import React from "react";

import {Container} from "./style";

import Header from "../Header";
import Footer from "../Footer";

const Layout: React.FC = ({children}) => {

    return (
        <Container>
            <Header />
            <div  className="container py-5">
                {children}
            </div>

            <Footer />
        </Container>
    )
}

export default Layout