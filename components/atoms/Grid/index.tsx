import * as React from 'react';
import './style.scss';

import images from '../Images';

function Grid(props) {

  let { items = [] } = props;

  return (
    <div className="grid">
      {!!items.length && items.map((item, index) =>
        <div key={index} className={"grid__cell grid__cell_" + (!!item.view && item.view.align) + " grid__cell_" + (!!item.view && item.view.bg)} data-view-col={!!item.view && item.view.col} data-view-row={!!item.view && item.view.row}>
          {!!item['bg-img'] && <img src={`${images(item['bg-img'])}`} alt="" className="grid__img-bg" />}
          {!!item.icon &&
            <div>
              <svg className={"icon grid__icon-" + (!!item.view && item.view.icon) + " grid__icon_large"}>
                <use xlinkHref={item.icon}></use>
              </svg>
              <svg className={"icon grid__icon-" + (!!item.view && item.view.icon) + " grid__img-data"}>
                <use xlinkHref={item.icon}></use>
              </svg>
            </div>
          }
          {!!item.topic && <div className={"grid__topic grid__topic_" + (!!item.view && item.view.topic)}>{item.topic}</div>}
          {!!item.header && <h3 className={"grid__header grid__header_" + (!!item.view && item.view.header)}>{item.header}</h3>}
          {!!item.text && <div className={"grid__text grid__text_" + (!!item.view && item.view.text)}>{item.text}</div>}
          {!!item.img && <img src={item.img} alt="" className="grid__img-data" />}
          {!!item.action && <button className="btn btn_transparent grid__btn">{item.action}</button>}
        </div>)}
    </div>
  );

}

export default Grid;
