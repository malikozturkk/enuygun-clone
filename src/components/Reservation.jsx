import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReservationPassenger from './ReservationPassenger'
import "../assets/scss/Reservation/Reservation.css"
import "../assets/scss/Reservation/ReservationPassenger.css"

const Search = () => {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ReservationPassenger />
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
}

export default Search;