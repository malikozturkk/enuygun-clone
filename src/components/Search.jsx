import React, { useState, useEffect } from "react";
import "../assets/scss/Search.css"
import tk from "../assets/images/tk.png"
import SuitCase from "../assets/icons/SuitCase";
import AngleRight from "../assets/icons/AngleRight";
import ExpandMore from "../assets/icons/ExpandMore";
import Schedule from "../assets/icons/Schedule";
import FlightUp from "../assets/icons/FlightUp";
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import { Link } from "react-router-dom";
import BtnIcons from "../assets/icons/BtnIcons";

const Search = () => {
    const [randomPrice, setRandomPrice] = useState(0)
    const [randomPenny, setRandomPenny] = useState(0)
    const [randomMinute, setRandomMinute] = useState(0)
    const [maxRandomTime, setMaxRandomTime] = useState(0)
    const [minRandomTime, setMinRandomTime] = useState(0)
    const data = 
    useEffect(() => {
        setRandomPrice (Math.floor(Math.random() * 1000));
        setRandomPenny (Math.floor(Math.random() * (100 - 10) + 10));
        setRandomMinute (Math.floor(Math.random() * 61));
        setMaxRandomTime (Math.floor(Math.random() * (25 - 13) + 13));
        setMinRandomTime (Math.floor(Math.random() * 10 ));    
      }, []);

    dayjs.locale('tr')
    const totalHour = maxRandomTime - minRandomTime
    
    const departureAirport = JSON.parse(window.localStorage.getItem('departureAirport'))
    const returnAirport = JSON.parse(window.localStorage.getItem('returnAirport'))
    const flightDate = JSON.parse(window.localStorage.getItem('flightDate'))
    const passengerType = JSON.parse(window.localStorage.getItem('passengerType'))
    const [activeDetails, setActiveDetails] = useState(false);
    return (
        <div className="container">
            <div className="row">
                <div className="searchFormGraphic">
                    priceGraphic
                </div>
            </div>
            <div className="row">
                <div className="col filterCol">
                    Filters
                </div>
                <div className="col">
                    <div className="searchResult">
                        <div className="flightList">
                            <div className='eiFlightUp'>
                                <FlightUp />
                            </div>
                            <div className="flight-summary">
                                <div className="flight-summary-infos">
                                    <div className="flight-summary-airline">
                                        <div className="summary-airline">
                                            <img className="airlineIcon" src={tk} alt="Türk Hava Yolları" width="20" height="20"></img> 
                                            <div className="summary-marketing-airlines">Türk Hava Yolları</div>
                                        </div>
                                        <div className="summary-airports">
                                            <span className="itemAirport">IST</span>
                                            <span className="itemAirport AngleRight"><AngleRight/></span>
                                            <span className="itemAirport">ESB</span>
                                        </div>
                                    </div>
                                    <div className="flight-summary-promo">
                                        <div className="summary-luggage">
                                            <SuitCase />
                                            <span className="summary-luggage-value"> 1x15</span>
                                            <span className="summary-luggage-unit">kg</span>
                                        </div>
                                        <div className="summary-transit direct">Direkt Uçuş</div>
                                    </div>
                                    <div className="flight-summary-time">
                                        <div className="summary-time">
                                            <div className="flight-departure-time">0{minRandomTime}:00</div>
                                            <div className="seperator">⟶</div>
                                            <div className="flight-arrival-time">{maxRandomTime}:00</div>
                                        </div>
                                        <div className="summary-duration">
                                            <Schedule /> {totalHour}sa 00dk
                                        </div>
                                    </div>
                                    <div className="flight-summary-price">
                                        <div>
                                            <div className="summary-average-price">
                                                <span className="money-int">{randomPrice}</span>
                                                <span className="money-decimal">,{randomPenny}</span> 
                                                <span className="money-currency">TL</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flight-summary-select">
                                        <Link to="/reservation">
                                            <button className="action-select-btn tr btn btn-outline-success btn-sm">
                                                <span className="ButtonIcons">Seç <BtnIcons /></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`flight-detail collapse ${activeDetails ? "show" : ""}`}>
                                <div className="flight-detail-wrapper">
                                    <div className="segment-detail ">
                                        <div className="segmentInfo">
                                            <div className="segment-airline">
                                                <span className="segment-airline-name">Türk Hava Yolları Uçuş: TK2108 Sınıfı: E</span>
                                            </div>
                                            <div className="segment-flight">
                                                <div className="segment-airports">
                                                    <div className="segment-airport-origin">
                                                        <div title="İstanbul, İstanbul Havalimanı" className="combineAirportName noneWidth">0{minRandomTime}:00 - {dayjs(flightDate.departure_date.startDate).format('DD MMM dddd')} - {departureAirport.departure_airport_name.value}</div>
                                                        <div className="segment-airport-terminal"></div>
                                                    </div>
                                                    <div className="segment-airport-destination">
                                                        <div title="Ankara, Esenboğa Havalimanı" className="combineAirportName noneWidth">{maxRandomTime}:00 - {dayjs(flightDate.departure_date.startDate).format('DD MMM dddd')} - {returnAirport.return_airport_name.value}</div>
                                                        <div className="segment-airport-terminal"></div>
                                                    </div>
                                                </div>
                                                <div className="segment-attributes"><span><i className="ei-room-service"></i> Yiyecekler ücretsizdir</span></div>
                                            </div>
                                        </div>
                                        <div className="generalWarning"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flight-actions">
                                <button type="button" className="action-detail-btn" onClick={() => setActiveDetails(!activeDetails)}>
                                    <span className="angleBottom">Detay<ExpandMore/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;