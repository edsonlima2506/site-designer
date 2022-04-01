import React from "react";
import '../css/index.css';
import logo from '../img/logo.png';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <img src={logo} alt="Logo Lucas Designer" className="logo" />
                <nav className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#design-grafico">Design Gráfico</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#grafica">Gráfica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#comunicacao-visual">Comunicação Visual</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#uniformes">Uniformes</a>
                    </li>
                </nav>
                <a href="https://wa.link/0cvrods">
                <a href="https://api.whatsapp.com/send?phone=5547999258852&text=Ol%C3%A1%20Lucas!%20Gostaria%20de%20conhecer%2Fcontratar%20seus%20trabalhos!" class="btn btn-warning">Contato</a>
                </a>
            </div>
        );
    }
}