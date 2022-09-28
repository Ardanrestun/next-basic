import Layout from "../../components/layout";
import Styles from "../../styles/Blog.module.css";

interface Post {
  posts: Array<any>;
  title: string;
  body: string;
  author: string;
}

interface PostProps {
  dataPost: Post;
}
export default function blog(props: PostProps) {
  const { dataPost } = props;
  console.log({ dataPost });
  return (
    <Layout title="Blog Page">
      {dataPost.posts.map((post) => {
        return (
          <div className={Styles.column}>
            <div className={Styles.card}>
              <h4 className={Styles.hhead}>{post.title}</h4>
              <p className={Styles.pbody}>{post.body}</p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/posts");
  const dataPost = await res.json();
  return {
    props: {
      dataPost: dataPost,
    },
  };
}
