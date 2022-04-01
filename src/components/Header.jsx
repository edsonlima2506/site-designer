import React from "react";
import '../css/index.css';
import Navbar from './Navbar';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header-index">
                <Navbar />
                <div className="cta">
                    <h1>
                        Design é o primeiro estágio da paixão <br />
                        entre o consumidor e sua marca!
                    </h1>
                    <a href="https://api.whatsapp.com/send?phone=5547999258852&text=Ol%C3%A1%20Lucas!%20Gostaria%20de%20conhecer%2Fcontratar%20seus%20trabalhos!" class="btn btn-warning">Entrar em contato</a>
                </div>
                <div className="social-icons">
                    <hr className="row" />
                </div>
            </header>
        );
    }
}