import { LatLngExpression } from "leaflet";

export type ServiceType = "hunter" | "butcher";

export type AccountType = "basic" | "premium" | "gold";

export enum AccountTypeWeight {
  basic = 0,
  premium = 1,
  gold = 2,
}

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
  serviceType: ServiceType;
  tags: string[];
  noOfRatings: number;
  accountType: AccountType;
  rating: number;
}
