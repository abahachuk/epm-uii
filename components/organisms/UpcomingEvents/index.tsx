import * as React from 'react';
import './style.scss';

import Grid from '../../atoms/Grid';

function UpcomingEvents(props) {

  let { upcomingEvents = [] } = props;

  return (
    <section className="upcoming-events">
      <div className="upcoming-events__inner">
        <h2 className="upcoming-events__title">Upcoming Events</h2>
        <Grid items={upcomingEvents} />
      </div>
    </section>
  );

}

export default UpcomingEvents;
