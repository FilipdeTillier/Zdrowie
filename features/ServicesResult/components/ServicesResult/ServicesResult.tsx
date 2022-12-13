import { Fragment, ReactElement } from "react";
import { useIntl } from "react-intl";
import { ServiceProvider } from "../../interfaces/servicesProvider";
import { ServiceCard } from "../ServiceCard";

interface ServicesResultProps {
  services: ServiceProvider[];
}

export const ServicesResult = ({
  services,
}: ServicesResultProps): ReactElement => {
  const { formatMessage } = useIntl();
  return (
    <div className="py-14">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};
