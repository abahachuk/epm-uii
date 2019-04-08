import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import Slider from '../components/molecules/Slider';
import WhatsNew from '../components/organisms/WhatsNew';
import UpcomingEvents from '../components/organisms/UpcomingEvents';
import HotVacancies from '../components/organisms/HotVacancies';
import SearchJob from '../components/organisms/SearchJob';
import data from '../data.json'; // TODO: temp solution

const Index = (props) => {
  const { country } = props;
  const { slides } = data;

  const hotVacancies = data['hot-vacancies'];
  const upcomingEvents = data['upcoming-events'];
  const whatsNew = data['whats-new'];

  return (
    <main className="content">
      <Slider slides={slides} />
      <SearchJob
        currentCityId={country.currentCityId}
        cities={country.cities}
      />
      <WhatsNew whatsNew={whatsNew} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <HotVacancies hotVacancies={hotVacancies} />
    </main>
  );
};

const mapStateToProps = ({ country }) => {
  return {
    country,
  };
};

export default connect(
  mapStateToProps,
)(Index);