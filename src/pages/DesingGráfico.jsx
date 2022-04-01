import React from "react";
import '../css/index.css';

export default class DesignGrafico extends React.Component {
    render() {
        return (
            <div className="design-container">
                <header>
                    <h1>Faça agora seu orçamento!</h1>
                    <a href="https://api.whatsapp.com/send?phone=5547999258852&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20design%20gr%C3%A1fico!">
                        <button className="btn btn-warning">
                            Orçamento
                        </button>
                    </a>
                </header>
            </div>
        );
    }
}