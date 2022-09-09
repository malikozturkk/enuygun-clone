import "../assets/scss/Header.css"
import Dropdown from "./Dropdown";
import Icons from "../assets/icons/Icons";
import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { Link } from "react-router-dom";
//import Data from '../assets/data.json'

class Header extends Component {
  state = { isVisible: false }
  showHideDropdown = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  render() {
    const {
      first,
      second,
      third,
      fourth
    } = this.props;

    const { isVisible } = this.state;

    return (
      <header className="Header">
        {/* {Data.map(data =>
          <div className="col">
            <a href={data.link} className="footer-menu-toggler links">{data.name}</a>
            <div className="footer-menu-collapse collapse">
              {data.items.map(item =>
                <ul className="footer-menu-list">
                  <li>
                    <a className="links" href={item.link}>{item.name}</a>
                  </li>

                </ul>
              )}
            </div>
          </div>
        )} */}
        <nav>
          <div className="Container">
            <Link to="/" className="header-logo">
              <Icons />
            </Link>
            <Link to="/" className="header-items active">
              {first}
            </Link>
            <Link to="/otobus-bileti" className="header-items passive">
              {second}
            </Link>
            <Link to="/otel" className="header-items passive">
              {third}
            </Link>
            <Link to="/yardim" className="header-items passive">
              {fourth}
            </Link>
            <a className="dot" href="#" onClick={this.showHideDropdown.bind(this)}>
              ...
              {
                isVisible ?
                  <Dropdown first="Kart Puanlarını Aktar" second="Sigorta" third="Vize" fourth="Hediye Kart" fifth="Gezgin" sixth="Kredi" seventh="Araç Kiralama" eighth="Mevduat" ninth="İnternet" tenth="GSM" eleventh="İletişim" twelfth="Yardım" links="https://www.enuygun.com/ucak-bileti" />
                  : null
              }
            </a>
          </div>
        </nav>
      </header>

    );
  }

}



export default Header;