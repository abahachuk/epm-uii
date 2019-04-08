import * as React from 'react';
import './style.scss';
import images from '../../atoms/Images';
import Item from '../FooterLocationItem';
import { IProps, IItem } from './FooterLocation';
const cms_url = `${process.env.CMS_HOST}:${process.env.CMS_PORT}`;

function FooterLocation(props: IProps) {

  const { cities, country, video } = props;

  return (
    <div className="footer-locations">
      <div className="footer-locations__video">
        <img src={`${images(cms_url + video.url)}`} alt="" />
      </div>
      {!!cities && cities.map((item: IItem, index: number) =>
        <Item key={index} country={country} {...item} />
      )}
    </div>
  );

}

export default FooterLocation;
