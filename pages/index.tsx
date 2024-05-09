import { Fragment } from "react";
import { gql } from "@apollo/client";

import { SearchRecords } from "../features/SearchRecords";
import { appApolloClient } from "./_app";
import { mapOfferToData } from "services/offers";

const EXAMPLE_QUERY = gql`
  query MyQuery {
    offers {
      offer
    }
  }
`;

Home.getInitialProps = async () => {
  const respones = await appApolloClient
    .query({
      query: EXAMPLE_QUERY,
    })
    .then(({ data }) => mapOfferToData(data));

  return {
    data: respones,
  };
};

function Home({ data = [] }) {
  return (
    <Fragment>
      <SearchRecords data={data} />
    </Fragment>
  );
}

export default Home;
