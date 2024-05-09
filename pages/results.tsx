import { GetServerSidePropsContext, NextPage } from "next/types";
import { ServicesResult } from "../features/ServicesResult/components/ServicesResult/ServicesResult";
import { ServiceProvider } from "../features/ServicesResult/interfaces/servicesProvider";
import { getOffers } from "api/getOffers";

interface ResultsPageProps {
  pages: number;
  results: ServiceProvider[];
}

const Results: NextPage<any> = ({ data = [] }) => {
  return <ServicesResult services={data} pages={2} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const respones = await getOffers();

  return {
    props: {
      data: respones,
    },
  };
}

export default Results;
