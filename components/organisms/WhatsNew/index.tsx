import * as React from 'react';
import './style.scss';

import Grid from '../../atoms/Grid';

function WhatsNew(props) {

  let { whatsNew = [] } = props;

  return (
    <section className="whats-new whats-new_collapsed">
      <div className="whats-new__inner">
        <h3 className="whats-new__title">See what's new in Front-End Solutions</h3>
        <Grid items={whatsNew} />
      </div>
      <button className="btn btn_icon whats-new__btn-more">
        <svg className="icon whats-new__more-icon">
          <use xlinkHref="#sprite_more"></use>
        </svg>
      </button>
    </section>
  );

}

export default WhatsNew;