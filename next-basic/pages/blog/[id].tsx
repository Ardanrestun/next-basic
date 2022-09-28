import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Styles from "../../styles/Blog.module.css";

interface Post {
  title: string;
  body: string;
}

interface PostProps {
  post: Post;
}
export default function blogdetail(props: PostProps) {
  const Router = useRouter();
  const { id } = Router.query;
  const { post } = props;
  console.log({ post });
  return (
    <Layout title="Blog Page">
      <div className={Styles.columnid}>
        <div className={Styles.cardid}>
          <h4 className={Styles.hheadid}>{post.title}</h4>
          <p className={Styles.pbodyid}>{post.body}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSidePaths() {
  const res = await fetch("https://dummyjson.com/posts");
  const dataPost = await res.json();
  const paths = dataPost.posts.map((post: { id: any }) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
  return {
    paths,
  };
}

export async function getServerSideProps(context: { params: { id: any } }) {
  const { id } = context.params;
  const res = await fetch("https://dummyjson.com/posts/" + id);
  const dataPost = await res.json();
  return {
    props: {
      post: dataPost,
    },
  };
}
