import React from "react";

import { Container } from "./style";

const Footer: React.FC = () => {
    let ano = new Date()

    return (
        <Container className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <span className="text-muted">Todos os diretitos reservados <a href="https://jos3duardo.com.br/" target="_blank">Jos3duardo</a> {ano.getFullYear()}.</span>
                </div>
        </Container>
    )
}

export default Footer