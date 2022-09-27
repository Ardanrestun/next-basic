import React from "react";
import Layout from "../../components/layout";
import Styles from "../../styles/Users.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface User {
  users: Array<any>;
  id: number;
  image: string;
  maidenName: string;
  email: string;
  address: {
    city: string;
    state: string;
  };
}

interface userProps {
  dataUser: User;
}

export default function index(props: userProps) {
  const { dataUser } = props;
  const router = useRouter();
  console.log({ dataUser });
  return (
    <Layout title="User Page">
      {dataUser.users.map((user) => {
        return (
          <div
            onClick={() => router.push(`/users/${user.id}`)}
            key={user.id}
            className={Styles.card}>
            <h4 className={Styles.a}>Data Fake User</h4>
            <img
              src={user.image}
              width={100}
              height={100}
              className={Styles.d}
            />
            <table>
              <tbody>
                <tr>
                  <td className={Styles.td1}>Name</td>
                  <td className={Styles.td2}>:</td>
                  <td className={Styles.td2}>{user.maidenName}</td>
                </tr>
                <tr>
                  <td className={Styles.td1}>Email</td>
                  <td className={Styles.td2}>:</td>
                  <td className={Styles.td2}>{user.email}</td>
                </tr>
                <tr>
                  <td className={Styles.td1}>City</td>
                  <td className={Styles.td2}>:</td>
                  <td className={Styles.td2}>
                    {user.address.city} , {user.address.state}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/users");
  const dataUser = await res.json();
  return {
    props: {
      dataUser: dataUser,
    },
  };
}
