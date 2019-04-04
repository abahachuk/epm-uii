import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Slider from '../components/molecules/Slider';
import WhatsNew from '../components/organisms/WhatsNew';
import UpcomingEvents from '../components/organisms/UpcomingEvents';
import HotVacancies from '../components/organisms/HotVacancies';
import data from '../data.json'; // TODO: temp solution

const Index = () => {
  const { slides } = data;

  const hotVacancies = data['hot-vacancies'];
  const upcomingEvents = data['upcoming-events'];
  const whatsNew = data['whats-new'];

  return (
    <main className="content">
      <Slider slides={slides} />
      {/* <SearchJob
        currentCityId={country.get('currentCityId')}
        cities={country.get('cities')}
      /> */}
      <WhatsNew whatsNew={whatsNew} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <HotVacancies hotVacancies={hotVacancies} />
    </main>
  );
};

export default Index;

// const query = gql`
//   {
//     fields {
//       name
//     }
//   }`;

// export default graphql(query, {
//   props: ({ data }) => ({
//     data
//   })
// })(Index);