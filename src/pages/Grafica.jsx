import React from "react";
import '../css/index.css';
import grafica from '../img/grafica-header.png';
import Navbar from '../components/Navbar';

export default class Grafica extends React.Component {
    render() {
        return (
            <div className="design-container">
                <Navbar />
                <header className="header-design-grafico header-portfolio">
                    <img src={grafica} alt="" className="img-header"/>
                    <div className="cta-portfolio">
                        <h1>Impressos gráficos da mais alta qualidade! <br />
                            E entrega em todo o país!
                        </h1>
                        <a href="https://api.whatsapp.com/send?phone=5547999258852&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20design%20gr%C3%A1fico!">
                            <button className="btn btn-warning">
                                Orçamento
                            </button>
                        </a>
                    </div>
                </header>
                <h1>Cartões de visita</h1>
                <div className="wrapper">
                    <iframe src="https://drive.google.com/file/d/18RBLWSOR3Fzee6oZlMv8WjeXcpOwC9W9/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1KFqBxUfREGmehIMkVm5Yz9k67R7a-beg/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1nlTSH5SCfRKNBFibN-NfkHa1eq7fWHdK/preview" width="265" height="200" allow="autoplay"></iframe>
                </div>
                <div className="wrapper">
                    <iframe src="https://drive.google.com/file/d/17GmqHLPaeGQURQWxIS8ozNraVpMdeKiF/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1c9cas7gk3SMXAyVquYxP4IxWDMnudIIM/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1nlTSH5SCfRKNBFibN-NfkHa1eq7fWHdK/preview" width="265" height="200" allow="autoplay"></iframe>
                </div>

                <h1>Panfletos</h1>
                <div className="wrapper">
                    <iframe src="https://drive.google.com/file/d/18RBLWSOR3Fzee6oZlMv8WjeXcpOwC9W9/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1KFqBxUfREGmehIMkVm5Yz9k67R7a-beg/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1nlTSH5SCfRKNBFibN-NfkHa1eq7fWHdK/preview" width="265" height="200" allow="autoplay"></iframe>
                </div>
                <div className="wrapper">
                    <iframe src="https://drive.google.com/file/d/17GmqHLPaeGQURQWxIS8ozNraVpMdeKiF/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1c9cas7gk3SMXAyVquYxP4IxWDMnudIIM/preview" width="265" height="200" allow="autoplay"></iframe>
                    <iframe src="https://drive.google.com/file/d/1nlTSH5SCfRKNBFibN-NfkHa1eq7fWHdK/preview" width="265" height="200" allow="autoplay"></iframe>
                </div>
            </div>
        );
    }
}