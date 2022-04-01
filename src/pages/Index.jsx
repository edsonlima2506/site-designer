import React from "react";
import '../css/index.css';
import Main from "../components/Main";
import Header from "../components/Header";
import Carroussel from "../components/Carroussel";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

export default class Index extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <Main />
            <Carroussel />
            <Comments />
            <Footer />
            </div>
        );
    }
}