import "../assets/scss/Footer.css"
import { PropTypes } from 'prop-types';
import Icons from "../assets/icons/Icons";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Twitter from "../assets/icons/Twitter";
import Linkedin from "../assets/icons/Linkedin";
import Youtube from "../assets/icons/Youtube";
import { Component } from 'react';
import axios from "axios";


    class Footer extends Component { 
        state = {
            datas: []
        }
        componentDidMount() {
            axios.get(`https://624a83dbfd7e30c51c0e7245.mockapi.io/footerAPI/footer`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
                }
            })
            .then(res => {
                const datas = res.data;
                this.setState({ datas });
            })
        }
        render () {
            return (
                <div>
                    <footer className="footer">
                        <div className="footerContainer">
                            <div className="footer-top">
                                <a className="header-logo" href="https://www.enuygun.com"><Icons/></a>
                                <div className="footer-social">
                                    <div className="footer-social-title">
                                        Bizi takip edin:
                                    </div>
                                    <div className="footer-social-links">
                                    <a href="https://www.facebook.com/enuygun" target="_blank" title="Facebook" className="footer-social-icons">
                                        <Facebook/>
                                    </a>
                                    <a href="https://www.instagram.com/enuygun/" target="_blank" title="Instagram" className="footer-social-icons">
                                        <Instagram/>
                                    </a>
                                    <a href="https://www.instagram.com/enuygun/" target="_blank" title="Twitter" className="footer-social-icons">
                                        <Twitter/>
                                    </a>
                                    <a href="https://www.instagram.com/enuygun/" target="_blank" title="Linkedin" className="footer-social-icons">
                                        <Linkedin/>
                                    </a>
                                    <a href="https://www.instagram.com/enuygun/" target="_blank" title="Youtube" className="footer-social-icons">
                                        <Youtube/>
                                    </a>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="footer-menu">
                                {this.state.datas.map((data, index) => 
                                    <div className="col" key={index}>
                                    <a href={data.link} className="footer-menu-toggler links">{data.name}</a>
                                    <div className="footer-menu-collapse collapse">
                                            {data.items.map((item, id) => 
                                                <ul className="footer-menu-list" key={id}>
                                                    <li>
                                                        <a className="links" href={item.link}>{item.name}</a>
                                                    </li>
                                                    
                                                </ul>
                                            )}
                                        </div>
                                </div>
                                    )}
                            </div>
                            
                            <hr className="hidden-md-up"></hr>

                            <div className="footer-bottom">
                                <div className="footer-iata">
                                    <div className="footer-iata-text">Enuygun.com IATA üyesidir. "8821943"</div>
                                </div>

                                <div className="footer-lang">
                                    <div className="footer-nav">
                                        <a href="https://www.wingie.com/" title="Wingie.com" rel="alternate" className="footer-bottom-links"> 
                                            <span className="footer-nav-text">Wingie.com</span>
                                        </a>

                                        <a href="https://www.wingie.co.uk/" title="Wingie.co.uk" rel="alternate" className="footer-bottom-links">
                                            <span className="footer-nav-text">Wingie.co.uk</span>
                                        </a>

                                        <a href="https://www.wingie.de/" title="Wingie.de" rel="alternate" className="footer-bottom-links">
                                            <span className="footer-nav-text">Wingie.de</span>
                                        </a>

                                        <a href="https://www.wingie.es/" title="Wingie.es" rel="alternate" className="footer-bottom-links"> 
                                            <span className="footer-nav-text">Wingie.es</span>
                                        </a>

                                        <a href="https://www.wingie.ae/" title="Wingie.ae" rel="alternate" className="footer-bottom-links">
                                            <span className="footer-nav-text">Wingie.ae</span>
                                        </a>

                                        <a href="https://ru.wingie.com/" title="ru.wingie.com" rel="alternate" className="footer-bottom-links">
                                            <span className="footer-nav-text">ru.wingie.com</span>
                                        </a>

                                        <a href="https://sa.wingie.com/" title="sa.wingie.com" rel="alternate" className="footer-bottom-links">
                                            <span className="footer-nav-text">sa.wingie.com</span>
                                        </a>

                                        <a href="https://eg.wingie.com/" title="eg.wingie.com" rel="alternate" className="footer-bottom-links">
                                            <span className="footer-nav-text">eg.wingie.com</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="footer-copyright">
                                    <small>© 2008 - 2022 Tüm hakları saklıdır. Enuygun.com | Enuygun Seyahat, Belge No: 7153</small>
                                </div>
                                
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
        
    }
        


export default Footer;