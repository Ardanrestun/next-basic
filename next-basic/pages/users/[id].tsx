import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout";
import styles from "../../styles/Users.module.css";

interface User {
  image: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  birthDate: string;
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
  email: string;
}
interface UserDetail {
  user: User;
}

export default function DetailUser(props: UserDetail) {
  const Router = useRouter();
  const { id } = Router.query;
  const { user } = props;
  console.log({ user });
  return (
    <Layout title="Detail User">
      <div className={styles.container}>
        <img src={user.image} className={styles.detailimg} />
        <div>
          <h3 className={styles.titledetail}>
            Detail Fake User {user.maidenName}
          </h3>
          <hr />
          <table>
            <tbody>
              <tr>
                <td className={styles.cellq}>First Name</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.firstName}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>Last Name</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.lastName}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>Maiden Name</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.maidenName}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>Birth Date</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.birthDate}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>Address</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.address.address}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>City</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.address.city}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>Postal Code</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.address.postalCode}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>State</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.address.state}</td>
              </tr>
              <tr>
                <td className={styles.cellq}>Email</td>
                <td className={styles.cellw}>:</td>
                <td className={styles.cellw}>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSidePaths() {
  const res = await fetch("https://dummyjson.com/users");
  const dataUser = await res.json();
  const paths = dataUser.users.map((user: { id: any }) => {
    return {
      params: {
        id: user.id,
      },
    };
  });
  return {
    paths,
  };
}

export async function getServerSideProps(context: { params: { id: any } }) {
  const { id } = context.params;
  const res = await fetch("https://dummyjson.com/users/" + id);
  const dataUser = await res.json();
  return {
    props: {
      user: dataUser,
    },
  };
}
