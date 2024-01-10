import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next/types";

import { ServiceProvider } from "@features/ServicesResult/interfaces/servicesProvider";
import { appPaths, paths } from "@helpers/paths";
import { request } from "@helpers/request";
import { Offer } from "@features/Offer/components/Offer";

interface OfferPageProps {
  offer: ServiceProvider;
}

const OfferPage: NextPage<OfferPageProps> = ({ offer }) => {
  return <Offer offer={offer} />;
};

export async function getServerSideProps({
  params = {},
}: GetServerSidePropsContext) {
  let offer = null;
  try {
    const { data } = await request.get<ServiceProvider[]>(
      `${paths.serviceProvider}/${params.id}`
    );
    offer = data;
  } catch (err) {
    return {
      redirect: {
        destination: "/notFound",
        permanent: false,
      },
    };
  }

  return {
    props: {
      offer,
    },
  };
}

export default OfferPage;
