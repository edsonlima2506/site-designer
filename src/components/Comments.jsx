import React from "react";
import '../css/index.css';
import comment from '../img/comment.png';

export default class Comments extends React.Component {
    render() {
        return (
            <div className="comments-container">
                <h1>O que falam dos meus trabalhos 💬</h1>
                <div className="comments">
                    <img src={comment} alt="" className="comment-card"/>
                    <img src={comment} alt="" className="comment-card"/>
                    <img src={comment} alt="" className="comment-card" />
                    <img src={comment} alt="" className="comment-card" />
                </div>
            </div>
        );
    }
}