import { appApolloClient } from "@pages/_app";
import { OFFERS_QUERY, mapOfferToData } from "services/offers";

export const getOffers = async () =>
  await appApolloClient
    .query({
      query: OFFERS_QUERY,
    })
    .then(({ data }) => {
      console.log("data", data);
      return data.offers.map(mapOfferToData);
    });
