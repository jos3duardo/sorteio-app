import React from "react";

import {Container} from "./style";
import {Img} from "../../components/Extra/style";
import numeros from "../../assets/numeros-sorteio.jpg";
import tempo from "../../assets/tempo.jpg";
import ajuda from "../../assets/ajuda.jpg";

const Home: React.FC = () => {
    return (
        <Container>
            <div className="row justify-content-center align-items-center mb-4 mt-5">
                <div className="col-md-4 ">
                    <div className="card">
                        <div className="col mx-auto text-center">
                            <Img src={numeros} className="card-img-top rounded float-start" alt=""/>
                        </div>
                        <div className="card-body">
                            <a href="/numero" className="btn btn-primary">Sorteio de Numeros</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="col mx-auto text-center">
                            <Img src={tempo} className="card-img-top" alt=""/>
                        </div>
                        <div className="card-body">
                            <a href="/nome" className="btn btn-primary">Sorteio de Nomes</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="col mx-auto text-center">
                            <Img src={ajuda} className="card-img-top" alt=""/>
                        </div>
                        <div className="card-body ">
                            <a href="/amigo" className="btn btn-primary">Sorteio de Amigo Secreto</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Home;