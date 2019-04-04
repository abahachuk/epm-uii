import * as React from 'react';
import './style.scss';

function HotVacancies(props) {

  let { hotVacancies = [] } = props;

  return (
    <section className="hot-vacancies">
      <div className="hot-vacancies__inner">
        <h2 className="hot-vacancies__header">Hot Vacancies</h2>
        <div className="hot-vacancies__tiles">
          {!!hotVacancies.length && hotVacancies.map((item, index) =>
            <div key={index} className="hot-vacancies__tile" data-fr={!!item.view && item.view.fr}>
              {!!item.bg && <img src={item.bg} alt="" className="hot-vacancies__bg" />}
              <h4 className="hot-vacancies__title">{item.title}</h4>
              <div className="hot-vacancies__location">{item.location}</div>
              <div className="hot-vacancies__text">{item.text}</div>
              <button className="btn btn_red hot-vacancies__btn">Apply</button>
            </div>)}
          <div className="hot-vacancies__tile hot-vacancies__tile_all">
            <svg className="icon hot-vacancies__icon-positions hot-vacancies__icon-positions_large">
              <use xlinkHref="#sprite_briefcase"></use>
            </svg>
            <svg className="icon hot-vacancies__icon-positions">
              <use xlinkHref="#sprite_briefcase"></use>
            </svg>
            <button className="btn btn_transparent hot-vacancies__btn hot-vacancies__btn_all">See all positions</button>
          </div>
        </div>
      </div>
    </section>
  );

}

export default HotVacancies;
