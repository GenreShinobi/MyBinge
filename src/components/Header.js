import React from "react";
import Search from "./Search";
import Logout from "./Logout";
import Login from "./Login";

const Header = (props) => {
    const getFolioList = () => {

    };

    const toFolio = () => {
        props.setFolio(true);
        getFolioList();
    };

    return (
        <div className="App-header">
            <nav className="navbar navbar-expand-lg App-Header">
                <a className="navbar-brand text-light" href="/">MYBINGE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button type="button" className="btn btn-link text-light font-weight-bold" onClick={() => props.setFolio(false)}>Home</button>
                        </li>
                        <li className="nav-item">
                            { props.user ? (<button type="button" className="btn btn-link text-light font-weight-bold" onClick={toFolio}>My Folio</button>) : (<></>)}
                        </li>
                    </ul>

                    {props.user ? (
                        <>
                            <Search search={props.search} />
                            <Logout />
                        </>
                    ) : (
                        <>
                            <Login setRegisterUser={props.setRegisterUser}/>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;