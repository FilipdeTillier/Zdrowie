import { ReactElement } from "react";
import { ServiceProvider } from "../interfaces/servicesProvider";

interface ServicesResultProps {
  services: ServiceProvider[];
}

export const ServicesResult = ({
  services,
}: ServicesResultProps): ReactElement => {
  return (
    <div>
      {services.map((service) => (
        <p key={service._id}>{service.name}</p>
      ))}
    </div>
  );
};
