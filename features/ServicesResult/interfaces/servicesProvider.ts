export type ServiceType = "hunter" | "butcher";

export interface ServiceProvider {
  _id: string;
  name: string;
  priceFrom: number;
  priceTo: number;
  picture: string;
  email: string;
  phone: string;
  province: string;
  address: string;
  latitude: number;
  serviceType: ServiceType;
  longitude: number;
  tags: string[];
}
