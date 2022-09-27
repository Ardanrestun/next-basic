import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./layout.module.css";

interface LayoutProps {
  title: string;
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {title}</title>
        <meta name="description" content="Website NextJs Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
