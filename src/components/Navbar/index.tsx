import React from "react";

const Navbar: React.FC = () => {

    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <button type="button" className="btn btn-secondary">Secondary</button>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sorteio Simples</a>
                    <div className="dropdown dropstart">
                        <button className="btn btn-secondary dropdown-toggle-split"  type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/numero">Sorteio de números</a></li>
                            <li><a className="dropdown-item" href="/nome">Sorteio de nomes</a></li>
                            <li><a className="dropdown-item" href="/amigo">Amigo Secreto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar