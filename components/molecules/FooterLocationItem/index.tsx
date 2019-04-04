import * as React from 'react';
import { ICityItem } from '../../../interfaces';

export default function FooterLocationItem(props: ICityItem) {

  const { id, name, address, zipCode, phone, phoneExt, fax, image, country } = props;

  return (
    <div className="footer-locations__location" key={id}>
      <div className="footer-locations__address">
        <img src={image} className="footer-locations__address-bg" alt={name} />
        <h3 className="footer-locations__city">{name}</h3>
        {!!address && address + ','}<br />
        {!!zipCode && zipCode}<br />
        {country}<br />
        <br />
        {!!phone && <span>P: {phone}</span>} <br />
        {!!phoneExt && <span>ext. {phoneExt}<br /></span>}
        {!!fax && <span>F: {fax}</span>}
      </div>
    </div>
  );
}
