import {
  fetchServices,
  selectResults,
  servicesSlice,
} from "@features/ServicesResult/store/servicesSlice";
import { wrapper } from "@store/store";
import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServicesResult } from "../features/ServicesResult/components/ServicesResult/ServicesResult";
import {
  QueryResponse,
  ServiceProvider,
} from "../features/ServicesResult/interfaces/servicesProvider";
import { paths } from "../helpers/paths";

import { request } from "../helpers/request";

interface ResultsPageProps {
  pages: number;
  results: ServiceProvider[];
}

const Results: NextPage<ResultsPageProps> = ({ results, pages }) => {
  return <ServicesResult services={results} pages={pages} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    data: { results, pages },
  } = await request.get<QueryResponse<ServiceProvider[]>>(
    `${paths.serviceProvider}`
  );

  return {
    props: {
      results,
      pages,
    },
  };
}

export default Results;
