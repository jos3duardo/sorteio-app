import React from "react";

import conteudoGratis from "../../assets/conteudo-gratis.png"
import demora from "../../assets/tempo.jpg"
import ajuda from "../../assets/ajuda.jpg"

import {Container, Img} from "./style";

const Extra: React.FC = ({children}) => (
    <Container>
            <div className="row justify-content-center align-items-center mb-4 mt-5">
                <div className="col-md-4 ">
                    <div className="card">
                        <div className="col mx-auto text-center">
                            <Img src={conteudoGratis} className="card-img-top rounded float-start" alt="" />
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">Como fazer sorteio de Amigo Secreto Gratis?</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="col mx-auto text-center">
                            <Img src={demora} className="card-img-top" alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Meu sorteio esta demorando para carregar. O que eu faço?</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="col mx-auto text-center">
                            <Img src={ajuda} className="card-img-top" alt="" />
                        </div>
                        <div className="card-body ">
                            <h5 className="card-title">Encontrou algum problema nos sorteios? Entre em contato o suporte</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
    </Container>
)

export default Extra