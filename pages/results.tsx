import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next/types";
import { ServicesResult } from "../features/ServicesResult/components/ServicesResult";
import { ServiceProvider } from "../features/ServicesResult/interfaces/servicesProvider";
import { paths } from "../helpers/paths";

import { request } from "../helpers/request";
import styles from "../styles/Home.module.css";

interface ResultsPageProps {
  results: ServiceProvider[];
}

const Results: NextPage<ResultsPageProps> = ({ results }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ServicesResult services={results} />
      </main>
    </div>
  );
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
