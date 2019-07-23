import React, {Component} from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import {Button} from "antd";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Welcome To Meapa Alpha Release</h1>
                <div className="graf-bg-container">
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                    <div className="graf-circle"/>
                </div>
                    <Link to="/login">
                        Continue To Login
                    </Link>
                <span> or</span>
                <h1 className="signup-link"> Contact with + 06 555 55 55 to get access</h1>
            </div>
        )
    }
}

export default Home;