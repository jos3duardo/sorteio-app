import React from "react";

import {Container, Link} from "./style";

import Extra from "../../components/Extra";
import Content from "../../components/Content";

const Home: React.FC = () => {
    return (
        <Container>
            <Content>
                <div className="row justify-content-center align-items-center">
                    <Link href="/numero" className="btn btn-primary col-md-3">Sorteio de Numeros</Link>
                    <Link href="/nome" className="btn btn-secondary col-md-3">Sorteio de Nomes</Link>
                    <Link href="/amigo" className="btn btn-success col-md-3">Sorteio de Amigo Secreto</Link>
                </div>
            </Content>
            <Extra/>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}
export default Home;