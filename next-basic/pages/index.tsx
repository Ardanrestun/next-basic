import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home Page">
        <h1>Home</h1>

      </Layout>
    </>
  );
};

export default Home;
