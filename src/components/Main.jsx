import React from "react";
import '../css/index.css';
import design from '../img/design-grafico-img.png';
import grafica from '../img/grafica.png';
import comVisual from '../img/comVisual.png';
import uniforme from '../img/uniforme.png';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="design-grafico-container main-container" id="design-grafico">
                    <img src={design} alt="" className="main-img"/>
                    <div className="main-container-texts">
                        <span className="d-flex">
                        <div className="barra-vertical"/>
                        <h1 className="main-title">DESIGN GRÁFICO</h1>
                        </span>
                        <h2 className="main-desc">
                            Transformo ideias em verdadeiras artes<br />
                            para o seu negócio.<br />
                        </h2>
                        <a href="/desing-grafico" className="btn btn-warning">Portfólio</a>
                        <span className="jobs-example">
                            <div className="circle">
                                <div className="interior-circle"/>
                            </div>
                            <ul className="jobs-example-ul">
                                <li>Midias sociais</li>
                                <li>Cartões interativos</li>
                                <li>Stories</li>
                                <li>E muito mais</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="design-grafico-container main-container" id="grafica">
                    <div className="main-container-texts left-content">
                        <span className="d-flex">
                        <h1 className="main-title">GRÁFICA</h1>
                        <div className="barra-vertical"/>
                        </span>
                        <h2 className="main-desc left-desc">
                        Sua marca em destaque <br />
                        em materiais da mais <br />
                        alta qualidade!
                        </h2>
                        <a href="/grafica" className="btn btn-warning">Portfólio</a>
                        <span className="jobs-example">
                            <ul className="d-flex jobs-example-ul">
                                <li>Midias sociais</li>
                                <li>Cartões interativos</li>
                                <li>Stories</li>
                                <li>E muito mais</li>
                            </ul>
                            <div className="circle">
                                <div className="interior-circle"/>
                            </div>
                        </span>
                    </div>
                    <img src={grafica} alt="" className="main-img"/>
                </div>
                <div className="design-grafico-container main-container" id="comunicacao-visual">
                    <img src={comVisual} alt="" className="main-img"/>
                    <div className="main-container-texts">
                        <span className="d-flex">
                        <div className="barra-vertical"/>
                        <h1 className="main-title">COMUNICAÇÃO VISUAL</h1>
                        </span>
                        <h2 className="main-desc">
                            Transformo ideias em verdadeiras artes<br />
                            para o seu negócio.<br />
                        </h2>
                        <a href="/comunicacao-visual" className="btn btn-warning">Portfólio</a>
                        <span className="d-flex jobs-example">
                            <div className="circle">
                                <div className="interior-circle"/>
                            </div>
                            <ul className="d-flex jobs-example-ul">
                                <li>Midias sociais</li>
                                <li>Cartões interativos</li>
                                <li>Stories</li>
                                <li>E muito mais</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="design-grafico-container main-container" id="uniformes">
                    <div className="main-container-texts left-content">
                        <span className="d-flex">
                        <h1 className="main-title">UNIFORMES</h1>
                        <div className="barra-vertical"/>
                        </span>
                        <h2 className="main-desc left-desc">
                            Profissionalize seu <br />
                            negócio com uniformes <br />
                            de qualidade para a equipe!
                        </h2>
                        <a href="/uniformes" className="btn btn-warning">Portfólio</a>
                        <span className="d-flex jobs-example">
                            <ul className="d-flex jobs-example-ul">
                                <li>Midias sociais</li>
                                <li>Cartões interativos</li>
                                <li>Stories</li>
                                <li>E muito mais</li>
                            </ul>
                            <div className="circle">
                                <div className="interior-circle"/>
                            </div>
                        </span>
                    </div>
                    <img src={uniforme} alt="" className="main-img"/>
                </div>
            </main>
        );
    }
}