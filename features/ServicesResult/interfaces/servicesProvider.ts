import { LatLngExpression } from "leaflet";

export type ServiceType = "physiotherapist" | "trainer" | "dietician";

export type AccountType = "basic" | "premium" | "gold";

export enum AccountTypeWeight {
  basic = 0,
  premium = 1,
  gold = 2,
}

export type TLocation = {
  name: string;
  position: LatLngExpression;
  address: string;
};

export interface ServiceProvider {
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
  position: LatLngExpression;
  locations: TLocation[];
  serviceType: ServiceType;
  tags: string[];
  noOfRatings: number;
  accountType: AccountType;
  rating: number;
}

export type QueryResponse<T> = {
  results: T;
  pages: number;
};
