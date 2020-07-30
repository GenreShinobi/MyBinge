import React, { useCallback } from "react";
import fire from "../config/fire";

const Logout = () => {
    const handleLogout = useCallback( async event => {
        event.preventDefault();
        try {
            await fire.auth().signOut();
        } catch (error) {
            alert(error);
        }
    }, [])

    return (
        <div>
            <form onSubmit={handleLogout}>
                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
            </form>
        </div>
    );
}

export default Logout;