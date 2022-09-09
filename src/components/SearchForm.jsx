import React, { useEffect, useState } from "react";
import "../assets/scss/SearchForm/SearchForm.css"
import "../assets/scss/SearchForm/DatePicker.css"
import "../assets/scss/SearchForm/ReactTabs.css"
import "../assets/scss/SearchForm/Dropdown.css"
import "../assets/scss/SearchForm/AutoComplete.css"
import 'react-tabs/style/react-tabs.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DatePicker from "react-datepicker";
import tr from 'date-fns/locale/tr';
import Dropdown from 'react-dropdown';
import SearchFormTarget from "../assets/icons/SearchFormTarget";
import SearchFormDestination from "../assets/icons/SearchFormDestination";
import SearchFormDate from "../assets/icons/SearchFormDate";
import SearchFormPassenger from "../assets/icons/SearchFormPassenger";
import BtnIcons from "../assets/icons/BtnIcons";
import { Link } from "react-router-dom";
import DepartureAutoSuggest from './departureAutoSuggest'
import ReturnAutoSuggest from './returnAutoSuggest'

const SearchForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());
    const [activeDate, setActiveDate] = useState(true)
    
    const persons = [
        'Yetişkin', 'Çocuk (2- 12 Yaş Arası)', 'Bebek (0 - 2 Yaş Arası)', '65 yaş üstü', 'Öğrenci (12 - 24 Yaş Arası)'
      ];
    
    const [person, setPerson] = useState('Yetişkin');

      const defaultOption = persons[0];
      const onChange = () => {
          setActiveDate(!activeDate)
      }
    const returnDate = activeDate ? 'Tek Yön' : finishDate


    const flightDate = {
        departure_date: {startDate},
        return_date: {returnDate}
    }
     window.localStorage.setItem('flightDate', JSON.stringify(flightDate));

     const passengerType = {
        passenger_type: {person}
    }
     window.localStorage.setItem('passengerType', JSON.stringify(passengerType));
    return (
        <div className="JumbotronMain">
            <div className="Container">
                <div className="tab-container">
                <Tabs>
                    <ul className="nav nav-tabs" id="jumbotron-tab">
                        <TabList>       
                            <Tab>
                                <span className="nav-item">
                                    <a href="#" className="nav-link">Uçak Bileti</a>
                                </span>
                            </Tab>
                            <Tab>
                                <span className="nav-item">
                                    <a href="#" className="nav-link">Çoklu Uçuş</a>
                                </span>
                            </Tab>
                            <Tab>
                                <span className="nav-item">
                                    <a href="#" className="nav-link">Check-in</a>
                                </span>
                            </Tab>
                            <Tab>
                                <span className="nav-item">
                                    <a href="#" className="nav-link">PNR Sorgulama</a>
                                </span>
                            </Tab>
                            <Tab>
                                <span className="nav-item">
                                    <a href="#" className="nav-link">Bilet İptal</a>
                                </span>
                            </Tab>
                            
                                <span className="nav-item">
                                    <a href="https://www.enuygun.com/arac-kiralama/" className="nav-link" target="_blank">Araç Kiralama</a>
                                </span>
                            
                        </TabList>
                    </ul>
                    <TabPanel>
                    <div className="tab-content" id="jumbotron-content">
                        <div className="tab-pane">
                            <div id="FlightSearchFormWrapper">
                                <form id="FlightSearchForm">
                                    <div className="SearchFormRow">
                                        <div className="FlightSearchFormCol">
                                            <label className="OriginLabel" htmlFor="OriginLabel">Nereden</label>
                                            <div className="SearchFormInput">
                                                <DepartureAutoSuggest />
                                            </div>
                                            <div className="InputIcon">
                                                <SearchFormTarget/>
                                            </div>
                                        </div>
                                        <div className="OriginDestinationSwitch">
                                            <button className="SwitchButton" type="button">
                                                <span className="SwitchSvgIcon">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="FlightSearchFormCol">
                                            <label className="DestinationLabel" htmlFor="DestinationLabel">Nereye</label>
                                            <div className="SearchFormInput">
                                                <ReturnAutoSuggest />
                                            </div>
                                            <div className="InputIcon">
                                                <SearchFormDestination/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SearchFormDateRow">
                                        <div className="SearchFormDepartureCol">
                                            <label className="OriginLabel">Gidiş Tarihi</label>
                                            <div className="DateForm">
                                                <div className="SingleDatePickerInput">
                                                    <div className="DateFormInput">
                                                        <DatePicker 
                                                            minDate={new Date()}  
                                                            locale={tr} 
                                                            monthsShown={2} 
                                                            dateFormat="dd MMM yyyy," 
                                                            className="DateInput" 
                                                            selected={startDate} 
                                                            onChange={(date) => {
                                                                setStartDate(date)
                                                                setFinishDate(date)                  
                                                              }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="InputIcon">
                                                <SearchFormDate/>
                                            </div>
                                        </div>

                                        <div className="SearchFormReturnCol">
                                            <label className="ReturnLabel">Dönüş Tarihi</label>
                                            <div className="DateForm">
                                                <div className="SingleDatePickerInput">
                                                    <div className="DateFormInput" onClick={() => setActiveDate(false)}>
                                                        <DatePicker 
                                                            className={`DateInput ReturnDateInput ${activeDate ? "activeDate" : ""}`}
                                                            disabled = {activeDate}
                                                            value= {activeDate ? 'Tek Yön' : activeDate}
                                                            minDate={startDate}
                                                            locale={tr}
                                                            monthsShown={2}
                                                            dateFormat="dd MMM yyyy,"
                                                            selected={finishDate}
                                                            onChange={(date) => setFinishDate(date)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="InputIcon">
                                                    <SearchFormDate/>
                                                </div>
                                                <label className="OneWayCheckbox OriginLabel" htmlFor="oneWayCheckbox">
                                                    <input type="checkbox" id="oneWayCheckbox" onChange={onChange} checked={activeDate}></input>Tek Yön
                                                </label>
                                        </div>
                                    </div>
                                    <div className="SearchFormRow">
                                        <div className="FlightSearchFormCol">
                                            <label className="OriginLabel" htmlFor="transitFilter">
                                                <input type="checkbox" id="transitFilter"></input>Aktarmasız
                                            </label>
                                            <Dropdown className="PassengerSelectButton" options={persons} onChange={e => setPerson(e.value)} value={defaultOption} placeholder="Select an option" />
                                            <div className="InputIcon">
                                                <SearchFormPassenger/>
                                            </div>
                                        </div>
                                        <div className="FlightSearchFormCol">
                                            <Link to="/search">
                                                <button className="PrimaryBtn" type="button">
                                                    <span>Ucuz bilet bul</span>
                                                    <span className="SvgIcon DirectionIcon">
                                                        <BtnIcons/>
                                                    </span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="SearchFormRow">
                                        <div className="FlightSearchFormCol">
                                            <label htmlFor="hotelSearchCheckbox"><input type="checkbox" id="hotelSearchCheckbox"></input> Bu tarihler için otelleri de listele</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </TabPanel>

                    <TabPanel>
                        <h2>Çoklu Uçuşu Burada Yaz</h2>
                    </TabPanel>

                    <TabPanel>
                    <div className="TabForm SearchForm">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label className="form-control-label" htmlFor="cancelRefund">PNR Kodu</label>
                                <input id="cancelRefund" className="form-control" type="text" name="pnr" maxLength="9" minLength="5" required="" data-msg-minlength="Lütfen PNR numaranızı girin" data-msg-required="Lütfen PNR numaranızı girin"></input>
                            </div>
                            <div className="col-6 form-group mb-3">
                                <label className="form-control-label" htmlFor="ModalCompleteReservationLastname2">Yolcunun Soyadı</label>
                                <input id="ModalCompleteReservationLastname2" className="form-control" type="text" name="lastname" required="" data-msg-required="Lütfen soyadınızı girin"></input>
                            </div>
                        </div>
                        <div className="row CheckIn">
                            <div className="col-6 form-group">
                                <label htmlFor="ModalOnlineCheckInLastname" className="form-control-label">Yolcunun Soyadı</label>
                                <input id="ModalOnlineCheckInLastname" className="form-control" type="text" name="lastname" required="" data-msg-required="Lütfen isim ve soyisim bilgilerinizi kimlik ya da pasaportunuzda yazıldığı gibi Türkçe veya İngilizce karakterler kullanarak girin."></input>
                            </div>
                            <div className="col-6 form-group">
                                <button className="btn btn-success btn-block" type="submit" style={{ height: 40 }}>Check-in yap <BtnIcons/></button>
                            </div>
                        </div>
                    </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="TabForm SearchForm">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label className="form-control-label" htmlFor="cancelRefund">PNR Kodu</label>
                                <input id="cancelRefund" className="form-control" type="text" name="pnr" maxLength="9" minLength="5" required="" data-msg-minlength="Lütfen PNR numaranızı girin" data-msg-required="Lütfen PNR numaranızı girin"></input>
                            </div>
                            <div className="col-6 form-group mb-3">
                                <label className="form-control-label" htmlFor="ModalCompleteReservationLastname2">Yolcunun Soyadı</label>
                                <input id="ModalCompleteReservationLastname2" className="form-control" type="text" name="lastname" required="" data-msg-required="Lütfen soyadınızı girin"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group text-right">
                                    <button className="btn btn-success" type="submit">PNR Sorgula <BtnIcons/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                    
                    <TabPanel>
                    <div className="TabForm SearchForm">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label className="form-control-label" htmlFor="cancelRefund">PNR Kodu</label>
                                <input id="cancelRefund" className="form-control" type="text" name="pnr" maxLength="9" minLength="5" required="" data-msg-minlength="Lütfen PNR numaranızı girin" data-msg-required="Lütfen PNR numaranızı girin"></input>
                            </div>
                            <div className="col-6 form-group mb-3">
                                <label className="form-control-label" htmlFor="ModalCompleteReservationLastname2">Yolcunun Soyadı</label>
                                <input id="ModalCompleteReservationLastname2" className="form-control" type="text" name="lastname" required="" data-msg-required="Lütfen soyadınızı girin"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group text-right">
                                    <button className="btn btn-success" type="submit">PNR Sorgula <BtnIcons/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;