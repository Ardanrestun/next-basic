import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function blogdetail() {
  const Router = useRouter();
  const { id } = Router.query;
  return (
    <Layout title="Blog Page">
      <h1>Blog category {id}</h1>
    </Layout>
  );
}
