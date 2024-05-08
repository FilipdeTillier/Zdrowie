import { gql } from "@apollo/client";
import { ServiceProvider } from "@features/ServicesResult/interfaces/servicesProvider";

export const OFFERS_QUERY = gql`
  query MyQuery {
    offers {
      offer
    }
  }
`;

type Offer = {
  offer: string;
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  priceTo: number;
  picture: string;
  email: string;
  website: string;
  phone: string;
  province: string;
  address: string;
  position: [4, 4];
  locations: [
    {
      name: string;
      position: [5, 5];
      address: string;
    }
  ];
  serviceType: "physiotherapist";
  tags: string[];
  noOfRatings: number;
  accountType: "basic";
  rating: number;
};

export const mapOfferToData = (offer: Offer): ServiceProvider => ({
  ...offer,
  id: Math.random().toString(),
  name: offer.offer,
  priceTo: 5,
  picture: "string",
  email: "string",
  position: [4, 4],
  locations: [
    {
      name: "string",
      position: [5, 5],
      address: "string",
    },
  ],
  serviceType: "physiotherapist",
  tags: ["string"],
  accountType: "basic",
});
