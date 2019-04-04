import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Index = ({ data: { fields } }) => {
  return (
      <div>
        <code>{JSON.stringify(fields)}</code>
      </div>
  );
};

const query = gql`
  {
    fields {
      name
    }
  }
`;

export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(Index);