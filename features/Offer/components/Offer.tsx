import { ServiceProvider } from "@features/ServicesResult/interfaces/servicesProvider";

interface OfferProps {
  offer: ServiceProvider;
}

export const Offer = ({ offer }: OfferProps) => {
  return <div>{offer.name}</div>;
};
