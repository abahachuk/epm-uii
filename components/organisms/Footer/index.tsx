import * as React from 'react';
import './style.scss';
import { IProps } from './Footer';

import FooterLocations from '../../molecules/FooterLocations';
import Instagram from '../../atoms/Instagram';


export default function Footer(props: IProps) {
  const { footer, country = {} } = props;
  const { name, cities = [] } = country;
  const { video, instagram, nav } = footer;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__join">
            <span className="footer__country">
              EPAM
                <span className="footer__country-name">Belarus</span>
            </span>
            <button className="btn btn_transparent footer__btn-join">Join us</button>
            <button className="btn btn_transparent footer__btn-positions">Open positions</button>
          </div>
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <svg className="icon footer__social-icon">
                <use xlinkHref="#sprite_tw"></use>
              </svg>
            </a>
            <a href="#" className="footer__social-link">
              <svg className="icon footer__social-icon">
                <use xlinkHref="#sprite_fb"></use>
              </svg>
            </a>
            <a href="#" className="footer__social-link">
              <svg className="icon footer__social-icon">
                <use xlinkHref="#sprite_li"></use>
              </svg>
            </a>
            <a href="#" className="footer__social-link">
              <svg className="icon footer__social-icon">
                <use xlinkHref="#sprite_gg"></use>
              </svg>
            </a>
          </div>
        </div>
        <FooterLocations video={video} cities={cities} country={name}></FooterLocations>
        <Instagram instagram={instagram}></Instagram>
        <div className="footer__bottom">
          <div className="footer__copyright">© 2018 EPAM Systems, Inc. All Rights Reserved.</div>
          <nav>
            <ul className="footer__nav">
              {!!nav.length && nav.map((item, index) =>
                <li key={index} className="footer__nav-item">
                  <a className="footer__nav-link" href={item.url}>{item.label}</a>
                </li>)}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
