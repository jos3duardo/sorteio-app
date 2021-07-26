import React from "react";
import {Container , Link} from "./style";
import Button from "../Button";

const Navbar: React.FC = () => {

    return (
        <Container className="navbar shadow-sm">
                <div className="container">
                    <Link href="/" className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                             stroke="currentColor"
                             stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"
                             className="me-2"
                             viewBox="0 0 24 24">
                            <path
                                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                            <circle cx="12" cy="13" r="4"/>
                        </svg>
                        <strong>Sorteio Simples</strong>
                    </Link>
                    <div className="dropdown dropstart">
                        <Button className="btn dropdown-toggle-split"  type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-bars"></i>

                        </Button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/numero">Sorteio de números</a></li>
                            <li><a className="dropdown-item" href="/nome">Sorteio de nomes</a></li>
                            <li><a className="dropdown-item" href="/amigo">Amigo Secreto</a></li>
                        </ul>
                    </div>
            </div>
        </Container>
    )
}

export default Navbar