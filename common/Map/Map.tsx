import dynamic from "next/dynamic";

import { MapMarker } from "./LeafletMap";

type MapProps = {
  markers: MapMarker[];
};

export const Map = ({ markers }: MapProps) => {
  const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });
  return <LeafletMap markers={markers} />;
};
