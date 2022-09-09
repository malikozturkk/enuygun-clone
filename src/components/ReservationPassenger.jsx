import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    
    return (
        <div classNameName="container">
            <div classNameName="reservationTitle">
                <b>Antalya </b>
                <span classNameName="SwitchSvgIcon">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </span>
                <b>İstanbul</b> Uçuşu
             </div>
             <div classNameName="passengerForm">
             <form action="" id="passenger-form">
                 <div className="contactInfo">
                     <div className="card-header">
                         <span><i className="ei-contact-phone"></i></span> İletişim Bilgileri
                    </div>
    
                    <div className="card-block">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 form-group" id="emailValidationContainer">
                                <label for="contact_email">E-posta adresiniz</label>
                                <input type="email" id="contact_email" name="contactEmail" className="form-control email emailValidation ui-autocomplete-input" data-content="Lütfen geçerli bir e-posta adresi girin" value="malikozturk975@gmail.com" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 form-group">
                                <label for="contact_cellphone">Cep Telefonunuz</label>
                                <div className="phone-country-dropdown input-group ">
                                    <button type="button" name="countryCode" className="dropdown-toggle phone-country-btn exclude-validation">
                                        <i className="country-flag country-flag-do"></i>
                                        <span dir="ltr">
                                            <span> +</span>
                                            <span className="phone-country-code" data-country-code="90">90</span>
                                        </span>
                                        <span className="caret"></span>
                                    </button>
                                    <input type="tel" id="contact_cellphone" name="contactMobile" className="form-control phone-number tr-mask-phone-number tr-mask" value="5319476796" data-content="Lütfen geçerli bir cep telefonu girin" />
                                    <div className="dropdown-menu phone-country-dropdown">
                                        <div className="search-country">
                                            <input className="phone-country-search form-control" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <label for="contactPhoneSave" className="custom-control custom-checkbox checkbox-sm">
                                    <input type="checkbox" id="contactPhoneSave" className="custom-control-input" name="update_user_phone" value="1" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description title-wrapper">Telefonumu Profilimde Güncelle</span>
                                </label>
                                <i className="tag ei-help-outline" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="Profilinizde kayıtlı telefon numaranız yeni girdiğiniz telefon numarası ile güncellenir." data-html="true" data-original-title="" title=""></i>
                            </div>
                        </div>
                        <div className="col-12 col-sm-2 col-md-12 col-lg-2 form-group noticeField">
                            <div className="input-notice icon-padded free-sms-top top tr">
                                <div className="arrow-left"></div>
                                <span>Ücretsiz SMS</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pl-0 smsMailInfo">
                        <span className="textInfo">Uçuş ve bilet bilgilerinizi e-posta ve ücretsiz SMS yoluyla ileteceğiz.</span>
                    </div>
                </div>
            
            
            
            
            
            
            
            
                <div className="card passenger-form">
                    <div className="card-block">
                        <div className="row row-passenger passenger-0 adult" data-passenger-type="adult" data-passenger-age-minyear="10-08-1902" data-passenger-age-maxyear="10-08-2010">
                            <div className="col-12 text-success mb-2 passengerHeader">
                                <i className="ei-personal"></i><span className="passenger-translate">Yetişkin</span>
                                <a className="firstNameList" id="firstNameList_0" data-event="firstNameList">Yolcu Listemden Seç <i className="ei-arrow-drop-down"></i></a>
                            </div>
                            <div className="form-group col-12 col-sm-6 col-md-12 col-lg-6">
                                <label for="firstName_0">Ad</label>
                                <input type="search" className="form-control passengerName nameValidation ui-autocomplete-input" value="" placeholder="Yolcu listemden seç" maxlength="20" />
                            </div>
                            <div className="form-group col-12 col-sm-6 col-md-12 col-lg-6">
                                <label for="lastName_0">Soyad</label>
                                <input type="search" className="form-control passengerLastName surnameValidation" value="" maxlength="20" />
                            </div>
                            <div className="form-group col-12 col-sm-6 col-md-8 col-lg-6">
                                <label for="birthDateDay_0">Doğum Tarihi</label>
                                <div className="birthDate-inputs" data-content="" data-passenger-type="adult" data-min-year="10-08-1902" data-max-year="10-08-2010">
                                    <div className="day">
                                        <select id="birthDateDay_0" name="birthDateDay_0" className="custom-select birthDateDay birthDate text-muted" data-store="true">
                                            <option value="" disabled="" selected="" hidden="">Gün</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>
                                    <div className="month">
                                        <select id="birthDateMonth_0"className="custom-select birthDateMonth birthDate text-muted" data-store="true">
                                            <option value="" disabled="" selected="" hidden="">Ay</option>
                                            <option value="01">Ocak</option>
                                            <option value="02">Şubat</option>
                                            <option value="03">Mart</option>
                                            <option value="04">Nisan</option>
                                            <option value="05">Mayıs</option>
                                            <option value="06">Haziran</option>
                                            <option value="07">Temmuz</option>
                                            <option value="08">Ağustos</option>
                                            <option value="09">Eylül</option>
                                            <option value="10">Ekim</option>
                                            <option value="11">Kasım</option>
                                            <option value="12">Aralık</option>
                                        </select>
                                    </div>
                                    <div className="year">
                                        <select id="birthDateYear_0" name="birthDateYear_0" className="custom-select birthDateYear birthDate text-muted" data-store="true">
                                            <option value="" disabled="" selected="" hidden="">Yıl</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-12 col-sm-6 col-md-12 col-lg-6 public-id-container">
                                <label for="_0">TC Kimlik No</label>
                                <input type="text" pattern="[0-9]*" inputmode="numeric"className="form-control publicId TR" value="" />
                                <div className="form-check tcNo citizien-checkbox">
                                    <label className="form-check-label custom-control custom-checkbox checkbox-xs foreign-nationals">
                                        <input type="checkbox" className="form-check-input foreignCheckbox custom-control-input" />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description small">T.C. Vatandaşı Değil</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group col-12 col-sm-6 col-md-6 col-lg-6">
                                <label className="genderSubj" for="gender_0">Cinsiyet</label>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 gender-select" data-content="Lütfen yolcunun cinsiyetini seçin">
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label custom-control custom-radio" for="gender_M_0">
                                                <input type="radio" value="M" className="form-check-input passengerGender custom-control-input male" />Erkek
                                                <div className="custom-control-indicator"></div>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label custom-control custom-radio" for="gender_F_0">
                                                <input type="radio" value="F" className="form-check-input passengerGender custom-control-input female" />Kadın
                                                <div className="custom-control-indicator"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 passenger-baggage">
                                <div>Bagaj hakkı:</div>
                                <div className="passenger-baggages">
                                    <div className="row">
                                        <div className="col">
                                                <div className="route-baggage ">
                                                    <div className="route-baggage-info">
                                                        <div className="baggage-allowance-container">
                                                            <span className="allowance-item">
                                                                <span>Gidiş (Antalya-İstanbul)</span>
                                                            </span>
                                                            <span className="allowance-item baggage-area ctx-departure-baggage">
                                                                <div className="baggage-area-item">
                                                                    <span className="baggage-area-value"><i className="ei-suitcase baggage-icon"></i>1x15 kg</span>
                                                                    <span className="baggage-area-message">check-in bagajı</span>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div>
                                                <div className="route-baggage ">
                                                    <div className="route-baggage-info">
                                                        <div className="baggage-allowance-container">
                                                            <span className="allowance-item"><span>Dönüş (İstanbul-Antalya)</span></span>
                                                            <span className="allowance-item baggage-area ctx-return-baggage">
                                                                <div className="baggage-area-item">
                                                                    <span className="baggage-area-value"><i className="ei-suitcase baggage-icon"></i>1x15 kg</span>
                                                                    <span className="baggage-area-message">check-in bagajı</span>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="passenger-info_save-container m-2 pt-2"><label for="passengerInfoSave_0" className="custom-control custom-checkbox checkbox-sm m-0"><input type="checkbox" id="passengerInfoSave_0" name="passengerInfoSave_0" className="custom-control-input passenger-info-save-input" value="1" data-store="true" data-index="0" data-input-name="skip_user_bundle" checked="checked" /><span className="custom-control-indicator"></span><span className="custom-control-description title-wrapper">
                    Yolcu Listesine Ekle
                </span>
                </label>
                </div>
                <div className="form-group col-12 col-sm-6 col-md-12 col-lg-6">
                    <input type="text" style="display: none;" id="email_0" name="email_0" className="form-control passengerEmail" value="" data-store="true" />
                    </div>
                    <div className="form-group col-12 col-sm-6 col-md-12 col-lg-6">
                        <input type="text" style="display: none;" id="user_id_0" name="user_id_0" className="form-control passengerUserId" value="" data-store="true" />
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="custom-btn-container">
                            <div className="card-footer">
                                <div className="row" data-className="price-checkout-wrapper">
                                    <div className="priceInfo" data-className="priceInfo"><div className="row"><div className="col-12"><strong className="remaining-grand-total-text">Toplam tutar</strong></div><div className="col-12 price text-success" data-event="grandTotal"><span className="money-int">1.291</span><span className="money-decimal">,98</span> <span className="money-currency">TL</span></div></div></div><div data-className="proceedCheckout"><button type="button" className=" btn btn-success btn-lg tr  js-reservation-btn">
                    Ödemeye ilerle <i className="ei-graphic_left"></i></button></div></div></div><div className="reservationButton"></div></div></form>
             </div>
        </div>
    );
}

export default Search;