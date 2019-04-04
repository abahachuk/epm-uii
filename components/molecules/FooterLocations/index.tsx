import * as React from 'react';
import './style.scss';
import images from '../../atoms/Images';
import Item from '../FooterLocationItem';
import { IProps, IItem } from './FooterLocation';

function FooterLocation(props: IProps) {

  const { cities } = props;
  const { country } = props;

  return (
    <div className="footer-locations">
      <div className="footer-locations__video">
        <img src={`${images('static/images/data/footer-video.png')}`} alt="" />
      </div>
      {!!cities && cities.map((item: IItem, index: number) =>
        <Item key={index} country={country} {...item} />
      )}
    </div>
  );

}

export default FooterLocation;
