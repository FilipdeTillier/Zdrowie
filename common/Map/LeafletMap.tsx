import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { Ratings } from "@features/ServicesResult/components/Rating";
import { ContactLabel } from "@features/ServicesResult/components/ContactLabel";
import { ServiceProvider } from "@features/ServicesResult/interfaces/servicesProvider";
import Link from "next/link";
import { appPaths } from "@helpers/paths";
import { useIntl } from "react-intl";
import { Text } from "@common/Text";

export type MapMarker = ServiceProvider;

type LeafletMapProps = {
  markers: MapMarker[];
};

const LeafletMap = ({ markers }: LeafletMapProps) => {
  const { formatMessage } = useIntl();
  const Leaflet = window.L;
  const points = markers.map((marker) => marker.position);
  const bounds = Leaflet.latLngBounds(points);

  const icon = new Leaflet.Icon({
    iconUrl: "/icons/map_pin.svg",
    iconSize: [20, 20],
    className: "map-icon",
  });

  return (
    <MapContainer
      center={[52.431055, 19.424583]}
      zoom={5}
      dragging
      className="map-container sm:w-full sm:h-80 lg:h-auto sm:aspect-auto lg:aspect-square"
      scrollWheelZoom={true}
      zoomAnimation
      bounds={bounds}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={icon}
          eventHandlers={{
            click: (e) => console.log(e),
          }}
        >
          <Popup>
            <Link className="flex mb-1" href={`${appPaths.offer}/${marker.id}`}>
              <Text className="marker-paragraph">{marker.name}</Text>
            </Link>
            <div className="flex mb-2 items-center">
              <Link
                href={`${appPaths.offer}/${marker.id}#reviews`}
                className="flex items-center hover:text-cyan-900"
              >
                <Ratings rating={marker.rating} className="mr-1" />
                {marker.noOfRatings} {formatMessage({ id: "reviews" })}
              </Link>
            </div>
            {marker.phone && (
              <ContactLabel
                type="phone"
                value={marker.phone}
                className="mb-1 hover:text-cyan-900"
              />
            )}
            {marker.email && (
              <ContactLabel
                type="email"
                useShortcut
                value={marker.email}
                className="hover:text-cyan-900"
              />
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
