import React from "react";

import {Container} from "./style";

const Content: React.FC = ({children}) => (
    <Container className="p-5 bg-light">
            {children}
    </Container>
)

export default Content