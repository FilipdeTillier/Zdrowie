import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next/types";
import { ServicesResult } from "../features/ServicesResult/components/ServicesResult/ServicesResult";
import { ServiceProvider } from "../features/ServicesResult/interfaces/servicesProvider";
import { paths } from "../helpers/paths";

import { request } from "../helpers/request";

interface ResultsPageProps {
  results: ServiceProvider[];
}

const Results: NextPage<ResultsPageProps> = ({ results }) => {
  return <ServicesResult services={results} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { data: results } = await request.get<ServiceProvider[]>(
    `${paths.serviceProvider}?province=${context.query.province}`
  );
  return {
    props: {
      results,
    },
  };
}

export default Results;
