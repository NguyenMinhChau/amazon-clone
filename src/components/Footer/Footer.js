import React from 'react';
import '../index.js';
import './Footer.css';

function Footer() {
    return (
        <div className='footer mt-3'>
            <div className='card text-center text-white'>
                <div className='card-header'>AMAZON</div>
                <div className='card-body'>
                    <h5 className='card-title text-bold'>Thông tin liên hệ</h5>
                    <p className='card-text'>
                        Nguyễn Minh Châu - Frontend Developer (ReactJS)
                    </p>
                    <ul className='list-icons d-flex align-items-center justify-content-center w-100'>
                        <li className='icon-item'>
                            <a href='https://www.linkedin.com/in/nguyen-minh-chau-87184320b/'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                        <li className='icon-item'>
                            <a href='https://github.com/NguyenMinhChau'>
                                <i className='fab fa-github'></i>
                            </a>
                        </li>
                        <li className='icon-item'>
                            <a href='tel:0398365404'>
                                <i className='fas fa-phone'></i>
                            </a>
                        </li>
                        <li className='icon-item'>
                            <a href='mailto:nmchauhcmue@gmail.com'>
                                <i className='fas fa-envelope-open'></i>
                            </a>
                        </li>
                        <li className='icon-item'>
                            <a href='https://goo.gl/maps/Zzcu6kQExDNkDJeH8'>
                                <i className='fas fa-map-marker-alt'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='card-footer text-muted'>
                    2021 - <span className='year'></span> &copy; Copyright all
                    rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
