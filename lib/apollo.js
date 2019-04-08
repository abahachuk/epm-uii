import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: `${process.env.CMS_HOST}:${process.env.CMS_PORT}/graphql`,
  })
};
export default withData(config);